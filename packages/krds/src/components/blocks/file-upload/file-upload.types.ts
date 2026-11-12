export interface FileUploadProps {
  /**
   * 파일 업로드 용도를 설명하는 레이블
   */
  label: string;
  /**
   * 레이블을 보완하는 설명
   */
  description?: string;
  /**
   * 파일 형식/크기/개수 제한 안내
   */
  helperText?: string;
  /**
   * 다중 파일 업로드 여부
   * @default false
   */
  multiple?: boolean;
  /**
   * 업로드 가능한 최대 파일 수
   */
  maxFiles?: number;
  /**
   * 허용 파일 형식 (input accept와 동일 형식, 예: ".pdf,.jpg")
   */
  accept?: string;
  /**
   * 파일별 최대 크기(bytes)
   */
  maxSize?: number;
  /**
   * 제어 모드 파일 목록
   */
  files?: File[];
  defaultFiles?: File[];
  onChange?: (files: File[]) => void;
  /**
   * @default false
   */
  disabled?: boolean;
  id?: string;
  className?: string;
}
