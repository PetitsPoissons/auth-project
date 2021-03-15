require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: process.env.jwtSecret,
    },
    async (payload, done) => {
      console.log('token extracted', payload);
      try {
        // find the user specified in token
        const user = await User.findById(payload.sub);
        // if user doesn't exist, handle it
        if (!user) {
          console.log('user not found', user);
          return done(null, false);
        }
        // otherwise, return the user
        done(null, user);
        console.log('user found', user);
      } catch (error) {
        console.log('error', error);
        done(error, false);
      }
    }
  )
);

// LOCAL STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      // find the user given the email
      const user = await User.findOne({ email });

      // if no user found, handle it
      if (!user) {
        return done(null, false);
      }

      // if user is found, check if the password is correct

      // if password invalid, handle it

      // otherwise, return the user
    }
  )
);
