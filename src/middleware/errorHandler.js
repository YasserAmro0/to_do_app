

const clientError = ((req, res, next) => {
    res.status(404).json({ message: "client Error 404 - NOT FOUND" });
});

const serverError = ((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

export { clientError, serverError };