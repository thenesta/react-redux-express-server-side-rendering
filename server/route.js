const express = require('express');
const morgan = require('morgan');//Morgan is used for logging request details
const path = require('path');
//Creating Router() object
var router = express.Router();

router.get("/session-cookie",function(req,res){
	console.log(req.cookies);
	res.json({"message" : req.cookies});
});

router.get("/users",function(req,res){
	res.json(
	 [{"id": "1","name":"A"},
	  {"id": "2","name":"B"}
	 ]
	);
});

router.post("/api/form-submit-url",function(req,res){
     var name = req.body.name;
	 console.log(name);
	 if(name == ""){
		res.json(
		 {
		   "errors" : 
			 {
				 "name": "invalid name",
				 "mobile": "invalid mobile"
			 }
			 
		 }
		);
	}else{
		res.json(
		 {
		   "success" : "xxx"	 
		 }
		)
	}
});



/*router.get("/session/create",function(req,res){
	req.session.test = "test";
	res.json({"message" : "hello"});
});*/

module.exports = router;
