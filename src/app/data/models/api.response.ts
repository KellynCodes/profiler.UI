export interface ApiResponse<T = null> {
  statusCode: number;
  message: any;
  data: T;
}
