const tryCatchMiddeleWare = (trycatch) => {
    return async (req,res,next)=>{
         try {
            await trycatch (req,res,next);
            next()
            
         } catch (error) {
            console.error(error)
            res.status(500).json({
               status : 'success' , 
               message : 'error'
            })
            
         }
    }
}

module.exports = tryCatchMiddeleWare
