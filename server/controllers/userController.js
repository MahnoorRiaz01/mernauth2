import usermodel from "../models/usermodel.js";

export const getUserData = async (req, res) =>{
    try {
        const { userId } = req.body;
        const user = await usermodel.findById(userId);

        if (!user) {
             return res.json({ success: false, message: 'User not foud'});
        }
 
       res.json({
        success: true,
        userData: {
            name: user.name,
            isAccountVerified: user.isAccountVerified
        }
       })

    } catch (error) {
         return res.json({ success: false, message: error.message });
    }
}