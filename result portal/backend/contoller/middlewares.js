const jwt=require('jsonwebtoken')
const middleware=async(req,res,next)=>{
    try {
        jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        next()
    } catch (error) {
        console.log(error.message)
        res.json({"error":"error in secure route"})
    }
}
module.exports={middleware}