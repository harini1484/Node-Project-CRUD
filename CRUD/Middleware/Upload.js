const multer=require('multer');


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'C:/Documents/Node.js/crud/Uploads')
    },
    filename:function(req,file,cb){
        const uniqueSuffix= Date.now() + '-' + Math.round(Math.random()*1E9);
        cb(null,file.fieldname + '-' + uniqueSuffix)
    }
});


const filefilter=(req,res,cb)=>{
    if(file.mimetype==="application/pdf" ||
        file.mimetype === "application/txt"

    ){
        cb(null,true)

    }else{
        cb(new Error("Only pdf files are Allowed"))
    }
};

const upload = multer({storage:storage});



module.exports={upload};