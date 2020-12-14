var mustache = require('/lib/mustache');

function handleGet() {
    var view = resolve('../admin/tools/main/main.html');

    var params = {};

    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}

exports.get = handleGet;