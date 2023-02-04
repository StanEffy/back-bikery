declare class AppError extends Error {
    isOperational: boolean;
    status: string;
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export default AppError;
