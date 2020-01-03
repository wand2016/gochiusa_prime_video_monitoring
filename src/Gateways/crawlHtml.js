const fetch = require('node-fetch');

/**
 * @param {String} url
 */
async function crawlHtml(url) {
    try {
        return (await fetch(url)).text();
    } catch (e) {
        console.warn(e);
        throw e;
    }
};

module.exports = crawlHtml;
