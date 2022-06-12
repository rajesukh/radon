const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const middleware=require("./middlewares/commonMiddlewares")
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://rajesukh2668-DB:Vh6Hmk1jO9ibpzIb@cluster0.akxjp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  app.use(middleware.timeUrlmiddleWare); //for  Time and URL information we use global middleware  
  

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
