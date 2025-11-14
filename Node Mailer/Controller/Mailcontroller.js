const nodemailer=require("nodemailer")

const sendmail=async(req,res)=>{
    try{
        const{to,subject,message}=req.body;
        const gmail=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"harini140804@gmail.com",
                pass:"opfc lqkh ldxq iksx"
            },
            tls:{
                rejectUnauthorized:false
            }
        })


         const mailOptions={
            from:'"Node Class" <harini140804@gmail.com>',
            to,
            subject,
            html: `<p>${message}</p>`

        }

        const info=await gmail.sendMail(mailOptions);
        res.json({
            message:"Mail Sent Successfully"
        })
    }catch(err){
        console.log(err);
        res.json({err})
    }
}


module.exports={sendmail}