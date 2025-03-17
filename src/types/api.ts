export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    prev: string | null;
    next: string | null;
  };
  results: T[];
}
