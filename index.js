var Loveseat = require('loveseat').Loveseat,
    db = new Loveseat({ db: 'battlecats' }),
    parse = require('http-params').parse,
    Router = require('route-emitter').Router,
    route = new Router();


