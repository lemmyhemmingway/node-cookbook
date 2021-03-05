const router = require("koa-router")();

router.get("/", async function (ctx)  {
    const title = "Koa.js";
    ctx.body = `
    <html>
    <head></head>
    <body>${title}</body>
    </html>`

});

module.exports = router;