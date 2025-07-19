import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Autheriozed Login Again" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = tokenDecode.id;

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      req.body = { ...req.body, userId: tokenDecode.id };
    } else {
      return res.json({
        success: false,
        message: "Not Autheriozed Login Again",
      });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;