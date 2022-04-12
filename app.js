const express  = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app  = express();
const date = require(__dirname + "/date.js");
var items =[];
var workItems = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/',function(req,res){
   res.render("list",{ 
       ListTitle : date.getday(), newListItems:items});
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.button === "work")
    {
        workItems.push(item);
        res.redirect("/work");
    }   
    else{
        items.push(item);
        res.redirect("/");
    }
})
app.get("/work",function(req,res){
    res.render("list",{
        ListTitle:"work", newListItems:workItems
    })
})
app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
})
