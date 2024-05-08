const express=require('express')
const app=express();
const mongoose=require('mongoose');
const routesurl=require('./routes/routes')
const cors=require('cors')

if(mongoose.connect('mongodb+srv://meenal-sekar:1805vishu@cluster0.vskqmqg.mongodb.net/Sivam-dp?retryWrites=true&w=majority'));
{
    console.log('database is connected');
}
app.use(express.json());
app.use(cors())
app.use("/app",routesurl)

app.listen(4000,()=>
{
    console.log("server is connected");
})