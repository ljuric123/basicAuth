
const notFound = (req, res, next) => {
    const error = new Error ('Not Found - ' + req.originalUrl);
    res.status(404);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json ({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? "nt" : error.stack,
    });
};

var auth = function(req, res, next) {
    if (req.session && req.session.admin)
    return next();
    else
    return res.sendStatus(401);
};


module.exports = {
    notFound,
    auth,
    errorHandler
};
export {};