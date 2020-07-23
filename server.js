const express = require('express')
const app = express()
const port = process.env.PORT || 3100
var path = require('path');

var nunjucks = require('nunjucks')

var sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
  src: path.join(__dirname, 'app/assets/stylesheets'),
  dest: path.join(__dirname, 'static'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', express.static(path.join(__dirname, 'static')))
// app.use(express.static('views'))

nunjucks.configure('app/views/', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render(path.join(__dirname, 'app/views/index.html'))
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


