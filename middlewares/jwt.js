const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findByUsernameWithoutPassword } = require("../services/vet");

passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => {
        const user = await findByUsernameWithoutPassword(payload.username);
        done(null, user);
    })
)

module.exports = passport.authenticate("jwt", {session:false});