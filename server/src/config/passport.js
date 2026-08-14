import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import env from "./env.js"
import * as userDao from "../dao/user.dao.js"


//     console.log("GOOGLE CLIENT ID:", env.GOOGLE_CLIENT_ID)
// console.log("GOOGLE CLIENT SECRET:", env.GOOGLE_CLIENT_SECRET)
// console.log("GOOGLE CALLBACK:", env.GOOGLE_CALLBACK_URI)

passport.use(new GoogleStrategy(

    {       clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL: env.GOOGLE_CALLBACK_URI,

        },async(accessToken, refreshToken, profile, done) => {
         try {
            let googleId = profile.id;
            let email = profile.emails[0]?.value;
            let name = profile.displayName;

            if(!email) {
                return done(
                new Error("Email not found in Google profile"),
                null
                )
            }
            // check email //

             let user = await userDao.getUserByEmail(email);

            if(user) {
                //  console.log("User already exists, Linking Google")

                user.googleId = googleId;

                await user.save();

                return done(null, user);

         }

         // create new user //

           user = await userDao.createGoogleUser(
            name,
            email,
            googleId
         )

        //  console.log("Google user created")

         return done(null, user);
    } catch(error) {
        console.error("Error occurred while processing Google authentication:", error);

        return done(error, null);
    }
}
))


export default passport



