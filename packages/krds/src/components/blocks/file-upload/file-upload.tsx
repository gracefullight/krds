import { Delete } from "@gracefullight/krds-icons";
import type { DragEvent } from "react";
import { useCallback, useId, useRef, useState } from "react";
import * as S from "#/components/blocks/file-upload/file-upload.styles";
import type { FileUploadProps } from "#/components/blocks/file-upload/file-upload.types";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

function validateFile(
  file: File,
  allowedExtensions: string[] | undefined,
  accept: string | undefined,
  maxSize: number | undefined,
): string | null {
  if (allowedExtensions && allowedExtensions.length > 0) {
    const matches = allowedExtensions.some((extension) =>
      file.name.toLowerCase().endsWith(extension),
    );
    if (!matches) {
      return `"${file.name}"은(는) 업로드할 수 없는 형식입니다. (${accept})`;
    }
  }
  if (maxSize !== undefined && file.size > maxSize) {
    return `"${file.name}"의 크기가 제한(${formatBytes(maxSize)})을 초과했습니다.`;
  }
  return null;
}

/**
 * FileUpload — KRDS 파일 업로드
 *
 * 파일 선택 버튼과 드래그 앤 드롭으로 로컬 파일을 첨부한다.
 * 파일 형식/크기/개수 제한은 도움말 텍스트로 안내하고, 오류 시 구체적인
 * 메시지를 제공한다. 사용자가 폼을 제출하기 전에는 파일을 서버에 전송하지 않는다.
 */
export default function FileUpload({
  label,
  description,
  helperText,
  multiple = false,
  maxFiles,
  accept,
  maxSize,
  files,
  defaultFiles,
  onChange,
  disabled = false,
  id,
  className,
}: FileUploadProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  const isControlled = files !== undefined;
  const [internalFiles, setInternalFiles] = useState<File[]>(
    defaultFiles ?? [],
  );
  const currentFiles = isControlled ? files : internalFiles;

  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFiles = useCallback(
    (next: File[]) => {
      if (!isControlled) setInternalFiles(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const addFiles = useCallback(
    (incoming: File[]) => {
      setError(null);

      const allowedExtensions = accept
        ?.split(",")
        .map((token) => token.trim().toLowerCase())
        .filter((token) => token.startsWith("."));

      const valid: File[] = [];
      for (const file of incoming) {
        const validationError = validateFile(
          file,
          allowedExtensions,
          accept,
          maxSize,
        );
        if (validationError) {
          setError(validationError);
          continue;
        }
        valid.push(file);
      }

      const limit = multiple ? (maxFiles ?? Number.POSITIVE_INFINITY) : 1;
      const merged = [...(multiple ? currentFiles : []), ...valid];

      if (merged.length > limit) {
        setError(`파일은 최대 ${limit}개까지 첨부할 수 있습니다.`);
      }

      updateFiles(merged.slice(0, limit));
    },
    [accept, maxSize, multiple, maxFiles, currentFiles, updateFiles],
  );

  const handleRemove = useCallback(
    (index: number) => {
      setError(null);
      updateFiles(currentFiles.filter((_, fileIndex) => fileIndex !== index));
    },
    [currentFiles, updateFiles],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);
      if (disabled) return;
      addFiles(Array.from(event.dataTransfer.files));
    },
    [addFiles, disabled],
  );

  return (
    <S.FileUploadGroup className={className}>
      <S.FileUploadLabel id={`${inputId}-label`}>{label}</S.FileUploadLabel>
      {description && (
        <S.FileUploadDescription>{description}</S.FileUploadDescription>
      )}
      {helperText && <S.FileUploadHelper>{helperText}</S.FileUploadHelper>}

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        aria-labelledby={`${inputId}-label`}
        onChange={(event) => {
          addFiles(Array.from(event.target.files ?? []));
          event.target.value = "";
        }}
      />

      <S.FileUploadDropZone
        $dragOver={dragOver}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <S.FileUploadButton
          variant="outlined"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          파일 선택
        </S.FileUploadButton>
        <S.FileUploadCounter>
          파일을 끌어다 놓거나 선택하세요
          {maxFiles !== undefined && ` (${currentFiles.length}/${maxFiles})`}
        </S.FileUploadCounter>
      </S.FileUploadDropZone>

      {error && <S.FileUploadError role="alert">{error}</S.FileUploadError>}

      {currentFiles.length > 0 && (
        <S.FileUploadList>
          {currentFiles.map((file, index) => (
            <S.FileUploadItem
              key={`${file.name}-${file.size}-${file.lastModified}`}
            >
              <S.FileUploadItemName>{file.name}</S.FileUploadItemName>
              <S.FileUploadItemSize>
                {formatBytes(file.size)}
              </S.FileUploadItemSize>
              <S.FileUploadRemove
                aria-label={`${file.name} 삭제`}
                disabled={disabled}
                onClick={() => handleRemove(index)}
              >
                <Delete size={16} />
              </S.FileUploadRemove>
            </S.FileUploadItem>
          ))}
        </S.FileUploadList>
      )}
    </S.FileUploadGroup>
  );
}
