
const Person = require("./models/person");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log("Recieved Credentials: ", username, password);
      const user = await Person.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username!" });
      }
      const isPassMatch =await user.comparePassword(password);
      if (isPassMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password!" });
      }
    } catch (error) {
      // return done(error);
      console.log(error);
    }
  })
);
module.exports = passport;