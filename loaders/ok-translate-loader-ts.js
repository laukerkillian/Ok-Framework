const { getOptions } = require("loader-utils");

module.exports = function (source) {
    const options = getOptions(this);

    console.log(options)

    // Apply some transformations to the source...

    return source
}