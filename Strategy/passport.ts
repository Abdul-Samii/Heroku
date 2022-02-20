const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const FACEBOOK_APP_ID = "665715394476591";
const FACEBOOK_APP_SECRET = "42f2f5f5aed09e60a0064b977a8cab95";


passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken:any, refreshToken:any, profile:any, done:any) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user:any, done:any) => {
  done(null, user);
});

passport.deserializeUser((user:any, done:any) => {
  done(null, user);
});