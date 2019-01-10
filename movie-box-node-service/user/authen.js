const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
import { config } from "../config";

// Passport session setup.
passport.serializeUser(function (username, done) {
    done(null, username);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

function facebookauthen() {
    passport.use(new FacebookStrategy({
            clientID: config.facebook.facebook_api_key,
            clientSecret: config.facebook.facebook_api_secret,
            callbackURL: config.facebook.callback_url
        },
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                //Check whether the User exists or not using profile.id
                if (config.facebook.use_database === 'true') {
                    //Further code of Database.
                }
                return done(null, profile);
            });
        }
    ))
}

module.exports = {
    facebook: facebookauthen
}