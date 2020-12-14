var mustache = require('/lib/mustache');

function handleGet() {
    var view = resolve('./main.html');

    var params = {};

    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}

exports.get = handleGet;
