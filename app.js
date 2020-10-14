const express = require('express');
const bodyparser = require('body-parser');
const db = require('./models');
const e6 = require('express-es6-template-engine');
const bcrypt = require('bcrypt');
const path = require('path');
const sass = require('node-sass-middleware');

const app = express();
app.engine('html', e6);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(sass({
    src: __dirname+'/sass',
    dest: __dirname+'/public',
    debug: true,
    outputStyle: 'compressed',
    force: true
}));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.listen(3000,function() {
    console.log('Poetry Fun-dation API now listening on port 3K')
})