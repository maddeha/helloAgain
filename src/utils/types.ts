export interface PaginatedApplication<T> {
  count: number;
  results: T[];
}

export interface PaginatedResponse<T> {
  count: number;
  results: T[];
}
