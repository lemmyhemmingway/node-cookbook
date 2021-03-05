module.exports = logger;

function logger() {
    return (req, res, next) => {
        console.log("Request received:", req.mothod, req.url)
    next();
    }
}
