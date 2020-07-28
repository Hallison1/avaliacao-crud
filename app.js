//Variables
const express=require('express');
const bodyParser=require('body-parser');
const handlebars=require('express-handlebars');
const app=express(); 
const urlencodeParser=bodyParser.urlencoded({extended:false});
const crud=require('banco');
let cruds=new crud();

//Template engine
app.engine("handlebars", handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));


//Routes and Templates
app.get("/", function(req,res){ res.render('index'); });
app.get("/cadastrar",function(req,res){res.render("insert");});
app.get("/select/:id?",function(req,res){cruds.read(req,res);});
app.post("/controllerForm",urlencodeParser,function(req,res){cruds.create(req,res);});
app.get('/deletar/:id',function(req,res){cruds.deletes(req,res);});
app.get("/update/:id",function(req,res){cruds.update(req,res);});
app.post("/controllerUpdate",urlencodeParser,function(req,res){cruds.update(req,res,'controller');});

//Start server
app.listen(3000,function(req,res){     
    console.log('Servidor está rodando'); 
});
        