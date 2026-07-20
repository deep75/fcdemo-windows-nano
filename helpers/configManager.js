'use strict';
var baseConfig = require('../config/config.json');

var Configuration = function() {
    this._rawConfig = buildRuntimeConfig();
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function buildRuntimeConfig() {
    var config = clone(baseConfig);
    config.session = config.session || {};
    config.openIdConnectStrategyParameters = config.openIdConnectStrategyParameters || {};
    config.oauth = config.oauth || {};

    config.fcURL = process.env.FC_URL || config.fcURL;

    config.session.secret = process.env.SESSION_SECRET || config.session.secret;

    config.openIdConnectStrategyParameters.clientID =
        process.env.FC_CLIENT_ID || config.openIdConnectStrategyParameters.clientID;
    config.openIdConnectStrategyParameters.clientSecret =
        process.env.FC_CLIENT_SECRET || config.openIdConnectStrategyParameters.clientSecret;
    config.openIdConnectStrategyParameters.callbackURL =
        process.env.FC_CALLBACK_URL || config.openIdConnectStrategyParameters.callbackURL;
    config.openIdConnectStrategyParameters.authorizationURL =
        process.env.FC_AUTHORIZATION_URL || config.openIdConnectStrategyParameters.authorizationURL;
    config.openIdConnectStrategyParameters.tokenURL =
        process.env.FC_TOKEN_URL || config.openIdConnectStrategyParameters.tokenURL;
    config.openIdConnectStrategyParameters.userInfoURL =
        process.env.FC_USERINFO_URL || config.openIdConnectStrategyParameters.userInfoURL;
    config.openIdConnectStrategyParameters.logoutURL =
        process.env.FC_LOGOUT_URL || config.openIdConnectStrategyParameters.logoutURL;
    config.openIdConnectStrategyParameters.issuer =
        process.env.FC_ISSUER || config.openIdConnectStrategyParameters.issuer;
    config.openIdConnectStrategyParameters.acr_values =
        process.env.FC_ACR_VALUES || config.openIdConnectStrategyParameters.acr_values;

    if (!config.openIdConnectStrategyParameters.issuer && config.fcURL) {
        config.openIdConnectStrategyParameters.issuer = config.fcURL.replace(/\/+$/, '');
    }

    config.oauth.authorizationURL = process.env.OAUTH_AUTHORIZATION_URL || config.oauth.authorizationURL;
    config.oauth.tokenURL = process.env.OAUTH_TOKEN_URL || config.oauth.tokenURL;
    config.oauth.callbackURL = process.env.OAUTH_CALLBACK_URL || config.oauth.callbackURL;

    config.quotientFamilialURL = process.env.QUOTIENT_FAMILIAL_URL || config.quotientFamilialURL;

    ensureRequiredSecret(config.session.secret, 'SESSION_SECRET');
    ensureRequiredSecret(config.openIdConnectStrategyParameters.clientID, 'FC_CLIENT_ID');
    ensureRequiredSecret(config.openIdConnectStrategyParameters.clientSecret, 'FC_CLIENT_SECRET');

    return config;
}

function ensureRequiredSecret(value, keyName) {
    if (!value || !value.trim()) {
        throw new Error('Missing required environment variable: ' + keyName);
    }
}

Configuration.prototype.getMongoPort = function(){
    return this._rawConfig.mongo.port;
};

Configuration.prototype.getMongoHost = function(){
    return this._rawConfig.mongo.host;
};

module.exports = Configuration;