export interface IPaginationResponse<T> {
  totalCount?: number;
  totalPages?: number;
  items?: T[];
}
