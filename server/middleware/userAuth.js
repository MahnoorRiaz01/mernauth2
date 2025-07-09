import jwt from "jsonwebtoken";

const userAuth = async (req, resizeBy, next) => {
    const { token } = req.cookies;

    if (!token) {
      return res.json({ success: false, message: 'Not Autheriozed Login Again'})    
    }
    try {
       const tokenDecode = jwt.verify(token, process.env.JWT.SECRET)
        
       if (tokenDecode.id) {
        req.body.userId = tokenDecode.id
       } else{
        return res.json({ success: false, message: 'Not Autheriozed Login Again'}) 
       }
next();

    } catch (error) {
      res.json({ success: false, message: error.message})     
    }
}

export default userAuth;