var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there, I am a dog but I can type I guess.",
    user: "Ginger",
    added: new Date()
  },
  {
    text: "I am also a dog, woof",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Message Board', messages : messages});
});

router.get("/new", function(req, res, next) {
  res.render('form', { title : "Form!"});  
})

router.post("/new", (req, res, next) => {
  console.log(req.body.name);
  let msg_name = req.body.name;
  let msg_contents = req.body.message;
  messages.push({ text : msg_contents, user : msg_name, added: new Date()})
  res.redirect("/");
})

module.exports = router;
