import { RegisterUser } from "../controllers";

const router = require("express").Router();
const passport = require('passport');

const CLIENT_URL = "http://localhost:9000/";

router.get("/login/success", (req:any, res:any) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req:any, res:any) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req:any, res:any) => {
  req.logout();
  res.redirect(CLIENT_URL);
});


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);




export {router as AuthRoute} 