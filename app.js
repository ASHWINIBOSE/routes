var express=require("express")
var prdrouter=require("./routes/prdrouter")
var emrouter=require("./routes/emrouter")
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/products",prdrouter);
app.use("/employee",emrouter);
app.get("/",function(req,res){
    res.render("home")
})

app.listen(8089,function(req,res){
    console.log("server started listening..")
})