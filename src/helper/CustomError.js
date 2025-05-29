class CustomError extends Error {
    status;
    message;
    
    constructor(status, message) {
        super(message);
        this.status = status || 500;
        this.message = message || 'Internal server error!!!';
    }
}

const templateErrors = {
    BAD_REQUEST: (message) => new CustomError(400, message),
    UNAUTHORIZED: (message) => new CustomError(401, message),
    FORBIDDEN: (message) => new CustomError(403, message),
    NOT_FOUND: (message) => new CustomError(404, message),
};

export { CustomError, templateErrors };