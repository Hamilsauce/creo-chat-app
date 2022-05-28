export enum ModelStatus {
  loading = 'loading',
  loaded = 'loaded',
  success = 'success',
  error = 'error',
  initial = 'initial',
  none = 'none',
}

export interface BaseModel {
  status?: string;
  errorMessage?: string;
}

export interface ModelMeta {
  create_time?: Date;
  sActive?: boolean;
}
