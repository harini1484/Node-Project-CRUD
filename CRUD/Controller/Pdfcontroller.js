const uploadpdffile=(req,res)=>{
    try{
        if(!req.file){
            return res.json({message:"No pdf uploaded"})
        }
        res.json({
            message:"pdf uploaded Successfully",
            file:{
                filename:req.file.filename,
                path:req.file.path,
                size:req.file.size
            }
        })
    }catch(error){
        res.json({message:"Upload Failed",error:error.message})
    }
}

module.exports={uploadpdffile}