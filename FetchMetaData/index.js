module.exports = async function (context, req) {
    const ogs = require("open-graph-scraper");
    const options = { url: `https://${req.query.url}` };
    const data = await ogs(options, (error, results, response) => {
        return results;
    });
    console.log(data);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data,
    };
}