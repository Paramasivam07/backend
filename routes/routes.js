const express=require('express');
const router=express.Router()
const signupTemplatecopy=require("../Model/signupmodel")

router.post("/signup",(request,response)=>
{
    const sam=new signupTemplatecopy({

        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    sam.save().then(data=>
        {
            response.json(data);
        }).catch(error=>
            {
                response.json(error)
            })
})

module.exports=router;