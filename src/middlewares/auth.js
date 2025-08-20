const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("admin is not authorized..");
  } else {
    console.log("Admin authorized..");
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "userABC";
  const isAuthUser = token === "userABC";
  if (!isAuthUser) {
    res.status(401).send("unauthorized user");
  } else {
    console.log("User authorized...");
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
