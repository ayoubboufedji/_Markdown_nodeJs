const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })

//Moteur templates
app.set('view engine', 'ejs')

// url encoder needs to come befor the article router
 //midelware pour pouvoir acceder au information des forms
app.use(express.urlencoded({ extended : false }))
//Modules /routes
//app.use('/articles', articleRouter) // le daplacer en bas afin de s'assurer que url ecoded soit traté avant 


//Routes
app.get('/', (req,res) => {

     const article = [{
          title : 'Test Articles',
          createdAt : new Date(),
          description : 'Test description'
     },
{
          title : 'Test Articles2',
          createdAt : new Date(),
          description : 'Test description2'
     }]

     res.render('articles/index', {articles : article});
})


//Modules /routes
app.use('/articles', articleRouter)


app.listen(5000);
