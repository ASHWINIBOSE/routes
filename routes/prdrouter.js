var express=require('express')
const router=express.Router();
router.get("/",function(req,res){
    res.render("products")
})
router.get("/new",function(req,res){
    res.render("new")
});
router.get("/new/retail",function(req,res){
    res.render("retail productss.....")
});
router.get("/new/whole",function(req,res){
    res.render("wholesale productss.....")
});
router.get("/view",function(req,res){
    res.render("view productsss")
});
router.get("/del",function(req,res){
    res.render("delete productsss")
});
router.get("/edit",function(req,res){
    res.render("edit productsss")
});

module.exports=router;