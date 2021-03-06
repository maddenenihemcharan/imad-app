var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one': {
        title: 'Article-One | Maddeneni Hemcharan',
        heading: 'Article One',
        date: '4 sep, 2017',
        content:  
                       `<p>
                            this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one.
                       </p> 
                        <p>
                            this is the content of article one. this is the content of article one. this is the content of article one. this is the content
                            article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one.
                        </p>
                         <p>
                            this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one. this is the content of article one.
                        </p>`
    },
    'article-two': {
         title: 'Article-Two | Maddeneni Hemcharan',
        heading: 'Article Two',
        date: '5 sep, 2017',
        content:  
                       `<p>
                            this is the content of article two.
                        <p>
                            this is the content of article two.
                         <p>
                             this is the content of article two.
                        </p>`
    },
    'article-three':{
        title: 'Article-Three | Maddeneni Hemcharan',
        heading: 'Article Three',
        date: '10 sep, 2017',
        content:  
               `<p>
                    this is the content of article three.
                <p>
                    this is the content of article three.
                 <p>
                     this is the content of article three.
                </p>`
    }
};    
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=
    `<html>
        <head>
            <title>
               ${title}
            </title>
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet">
        </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                       ${date}
                    </div>
                    <div>
                      ${content}
                    </div>
                </div>
            </body>
    </html>`;
    return htmlTemplate;
}
app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
