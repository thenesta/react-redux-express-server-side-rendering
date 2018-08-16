const express = require('express');
const morgan = require('morgan');//Morgan is used for logging request details
const path = require('path');
const session = require('express-session');
const cookies = require("cookie-parser");
const redis = require('redis');
const bodyParser = require('body-parser');
import universalLoader from './universal';
import 'fetch-everywhere'; // fresh isomorphic fetch polyfill, that supports all clients (not tested ;)
/*var client = redis.createClient(6379, "10.229.203.18");
client.get('ci_session:4qn8hk5gamdnunlqh6s8b2l1sj4iujal', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});*/


//include the routes file
var routes = require('./route');

const app = express();

let sessionOptions = {
  secret: "xxxx",
  cookie: {
    maxAge:269999999999
  },
  saveUninitialized: false,
  resave:false
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sessionOptions.cookie.secure = true;
}
else {
  sessionOptions.cookie.secure = false;
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
// parse application/json
app.use(bodyParser.json())

//app.use(morgan('combined'))
app.use(cookies());//use cookie,session-cookie
//app.use(session(sessionOptions));//use session
app.use('/api', routes);//Route API Express

if(process.env.NODE_ENV == 'production'){
  console.log("Production /build");
  app.use(express.static(path.resolve(__dirname, '..', 'build')))////Serve static files css,js,image

  /*app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'..', 'build', 'index.html'))
   });*/
  app.use('/', universalLoader);

  console.log("Server Side Rendering");
}


const PORT = process.env.PORT || 3013;



app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});
