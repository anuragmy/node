const router = require("express").Router();

const { users, userById } = require("../controllers/user");
const { requireSignIn, isAuth } = require("../controllers/auth");
const { update } = require("../controllers/user");

router.get("/secret/:userId", requireSignIn, isAuth, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.get("/users", users); // to find all users
router.put("/user/:userId", requireSignIn, isAuth, update); // to update user

router.param("userId", userById);

module.exports = router;
