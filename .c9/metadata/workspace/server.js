{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"'use strict';\nvar express = require('express');\nvar routes = require('./public/routes/index.js');\n\n\nvar app = express();\nrequire('dotenv').load();\n\napp.use(express.static(__dirname + '/public'));\n\n\nroutes(app);\n\nvar port = process.env.PORT || 8080;\napp.listen(port,  function () {\n\tconsole.log('Node.js listening on port ' + port + '...');\n});","undoManager":{"mark":59,"position":61,"stack":[[{"start":{"row":4,"column":0},"end":{"row":4,"column":35},"action":"remove","lines":["var mongoose = require('mongoose');"],"id":2}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":40},"action":"remove","lines":["mongoose.connect(process.env.MONGO_URI);"],"id":5}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["require('./app/config/passport')(passport);",""],"id":6}],[{"start":{"row":16,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["app.use(session({","\tsecret: 'secretClementine',","\tresave: false,","\tsaveUninitialized: true","}));"],"id":7}],[{"start":{"row":17,"column":0},"end":{"row":19,"column":28},"action":"remove","lines":["","app.use(passport.initialize());","app.use(passport.session());"],"id":8}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""],"id":9}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":41},"action":"remove","lines":["var session = require('express-session');"],"id":10}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":12}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":["a"],"id":13}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":["p"],"id":14}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":["p"],"id":15}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":["/"],"id":16}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":35},"action":"remove","lines":["var passport = require('passport');"],"id":17}],[{"start":{"row":16,"column":12},"end":{"row":16,"column":20},"action":"remove","lines":["passport"],"id":18}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"remove","lines":[" "],"id":19}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"remove","lines":[","],"id":20}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":66},"action":"remove","lines":["app.use('/common', express.static(process.cwd() + '/app/common'));"],"id":21}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":76},"action":"remove","lines":["","app.use('/controllers', express.static(process.cwd() + '/app/controllers'));"],"id":22}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":23}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["."],"id":24}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["/"],"id":25}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["."],"id":26}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["/"],"id":27}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["p"],"id":28}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["u"],"id":29}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["b"],"id":30}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["l"],"id":31}],[{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["i"],"id":32}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["c"],"id":33}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["/"],"id":34}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["c"],"id":35}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["o"],"id":36}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["n"],"id":37}],[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["s"],"id":38}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["o"],"id":39}],[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["l"],"id":40}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["e"],"id":41}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["."],"id":42}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["l"],"id":43}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["o"],"id":44}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["g"],"id":45}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":13},"action":"insert","lines":["()"],"id":46}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["0"],"id":47}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["0"],"id":48}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["p"],"id":49}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["r"],"id":50}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["o"],"id":51}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["c"],"id":52}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"],"id":53}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["s"],"id":54}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["s"],"id":55}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["."],"id":56}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["c"],"id":57}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["w"],"id":58}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["d"],"id":59}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":25},"action":"insert","lines":["()"],"id":60}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":62},"action":"remove","lines":["app.use('/public', express.static(process.cwd() + '/public'));"],"id":61},{"start":{"row":9,"column":0},"end":{"row":9,"column":47},"action":"insert","lines":["app.use(express.static(__dirname + '/public'));"]}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":26},"action":"remove","lines":["","console.log(process.cwd())"],"id":62}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":63}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":64}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":12},"end":{"row":11,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1470141314391}