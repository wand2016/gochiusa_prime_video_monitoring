/**
* @param {String} html
* @return Boolean
*/
function checkAvailability (html) {
    return !html.match(/currently unavailable/);
}

module.exports = checkAvailability;
