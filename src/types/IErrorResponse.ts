interface IErrorResponse {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessage: Storage;
}

export default IErrorResponse;
