var path = require('path');
var hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, '..', 'views', '_partials'));

// --- block / extend behaviour

var hbs_blocks = {};

hbs.registerHelper('extend', function(name, context) {
    var block = hbs_blocks[name];
    if (!block) {
        block = hbs_blocks[name] = [];
    }
    block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
    var val = (hbs_blocks[name] || []).join('\n');
    hbs_blocks[name] = [];
    return val;
});

// --- end of block / extend behaviour

hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

hbs.registerHelper('partial', function(name, ctx, hash) {
    var ps = hbs.handlebars.partials;
    if(typeof ps[name] !== 'function')
        ps[name] = hbs.handlebars.compile(ps[name]);
    return ps[name](ctx, hash);
});
