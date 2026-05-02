"use client";

import { Close, Upload } from "@gracefullight/krds-icons";
import { useCallback, useId, useRef, useState } from "react";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  /** Maximum allowed file size in bytes */
  maxSize?: number;
  value?: File[];
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// FileItem sub-component
// ---------------------------------------------------------------------------

interface FileItemProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

function FileItem({ file, onRemove, disabled }: FileItemProps) {
  const sizeLabel = formatBytes(file.size);

  return (
    <li className="flex items-center justify-between gap-2 rounded-md-lg border border-stroke-gray-light bg-surface-white px-3 py-2">
      <span className="min-w-0 flex-1 truncate text-body-sm text-fg-basic">
        {file.name}
      </span>
      <span className="shrink-0 text-label-xs text-fg-subtle">{sizeLabel}</span>
      <button
        type="button"
        onClick={onRemove}
        disabled={disabled}
        aria-label={`${file.name} 파일 삭제`}
        className={cn(
          "shrink-0 rounded-sm text-icon-gray-light transition-colors",
          "hover:text-fg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          "disabled:cursor-not-allowed disabled:opacity-40",
        )}
      >
        <Close size={16} />
      </button>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function validateFiles(
  incoming: File[],
  accept?: string,
  maxSize?: number,
): { valid: File[]; errors: string[] } {
  const valid: File[] = [];
  const errors: string[] = [];

  const acceptedTypes = accept
    ? accept
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  for (const file of incoming) {
    if (maxSize !== undefined && file.size > maxSize) {
      errors.push(
        `"${file.name}" 파일 크기(${formatBytes(file.size)})가 허용 최대 크기(${formatBytes(maxSize)})를 초과했습니다.`,
      );
      continue;
    }

    if (acceptedTypes.length > 0) {
      const matched = acceptedTypes.some((accepted) => {
        if (accepted.startsWith(".")) {
          return file.name.toLowerCase().endsWith(accepted.toLowerCase());
        }
        if (accepted.endsWith("/*")) {
          return file.type.startsWith(accepted.slice(0, -1));
        }
        return file.type === accepted;
      });

      if (!matched) {
        errors.push(`"${file.name}" 파일 형식이 허용되지 않습니다.`);
        continue;
      }
    }

    valid.push(file);
  }

  return { valid, errors };
}

// ---------------------------------------------------------------------------
// DropZone sub-component
// ---------------------------------------------------------------------------

interface DropZoneProps {
  inputId: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isDragging: boolean;
  disabled?: boolean;
  accept?: string;
  multiple?: boolean;
  onDragOver: (e: React.DragEvent<HTMLLabelElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLLabelElement>) => void;
  onDrop: (e: React.DragEvent<HTMLLabelElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DropZone({
  inputId,
  inputRef,
  isDragging,
  disabled,
  accept,
  multiple,
  onDragOver,
  onDragLeave,
  onDrop,
  onInputChange,
}: DropZoneProps) {
  return (
    <label
      htmlFor={inputId}
      aria-disabled={disabled}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 transition-colors",
        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-stroke-primary",
        isDragging
          ? "border-stroke-primary bg-surface-primary-subtler"
          : "border-stroke-gray-light bg-surface-white hover:border-stroke-primary hover:bg-surface-primary-subtler",
        disabled
          ? "cursor-not-allowed border-stroke-gray-light bg-surface-disabled hover:border-stroke-gray-light hover:bg-surface-disabled"
          : "cursor-pointer",
      )}
    >
      <span
        className={cn(
          "text-icon-gray-light",
          isDragging && "text-icon-primary",
          disabled && "text-icon-disabled",
        )}
      >
        <Upload size={32} />
      </span>
      <span
        className={cn(
          "text-center text-body-md text-fg-subtle",
          disabled && "text-fg-disabled",
        )}
      >
        파일을 드래그하거나 클릭하여 업로드
      </span>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        onChange={onInputChange}
      />
    </label>
  );
}

// ---------------------------------------------------------------------------
// FileUpload root component
// ---------------------------------------------------------------------------

function FileUpload({
  accept,
  multiple = false,
  maxSize,
  value,
  onChange,
  disabled = false,
  label,
  helperText,
  error = false,
  className,
}: FileUploadProps) {
  const generatedId = useId();
  const inputId = `file-upload-${generatedId}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const isControlled = value !== undefined;
  const [internalFiles, setInternalFiles] = useState<File[]>([]);
  const files = isControlled ? value : internalFiles;

  const handleFiles = useCallback(
    (incoming: File[]) => {
      const { valid, errors } = validateFiles(incoming, accept, maxSize);
      setValidationErrors(errors);

      if (valid.length === 0) return;

      const next = multiple ? [...files, ...valid] : valid.slice(0, 1);

      if (!isControlled) {
        setInternalFiles(next);
      }
      onChange?.(next);
    },
    [accept, maxSize, multiple, files, isControlled, onChange],
  );

  const handleRemove = useCallback(
    (index: number) => {
      const next = files.filter((_, i) => i !== index);
      if (!isControlled) {
        setInternalFiles(next);
      }
      onChange?.(next);
    },
    [files, isControlled, onChange],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(true);
    },
    [disabled],
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(false);
    },
    [disabled],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(false);
      const dropped = Array.from(e.dataTransfer.files);
      handleFiles(dropped);
    },
    [disabled, handleFiles],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files ?? []);
      handleFiles(selected);
      // Reset the input so the same file can be re-selected
      e.target.value = "";
    },
    [handleFiles],
  );

  const displayedHelperText =
    validationErrors.length > 0 ? validationErrors[0] : helperText;
  const hasError = error || validationErrors.length > 0;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span
          className={cn(
            "text-label-sm text-fg-basic",
            disabled && "text-fg-disabled",
          )}
        >
          {label}
        </span>
      )}

      <DropZone
        inputId={inputId}
        inputRef={inputRef}
        isDragging={isDragging}
        disabled={disabled}
        accept={accept}
        multiple={multiple}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onInputChange={handleInputChange}
      />

      {displayedHelperText && (
        <span
          className={cn(
            "flex items-center gap-1 text-label-xs",
            hasError ? "text-fg-danger" : "text-fg-information",
          )}
        >
          {displayedHelperText}
        </span>
      )}

      {files.length > 0 && (
        <ul className="flex flex-col gap-1" aria-label="선택된 파일 목록">
          {files.map((file, index) => (
            <FileItem
              key={`${file.name}-${file.size}-${index}`}
              file={file}
              onRemove={() => handleRemove(index)}
              disabled={disabled}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

FileUpload.displayName = "FileUpload";

export { FileUpload, type FileUploadProps };
