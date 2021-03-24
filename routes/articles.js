const express = require('express')
const router = express.Router();
const Article = require('./../models/article')


router.get('/new',(req,res) => {
    res.render('articles/new')
})


router.get('/:id', (req, res) => {


})


// just apre l'importation du model article on peut creer a new article 
router.post('/', async (req, res) => {
    const article = new Article({  // afin de pouvoir utiliser les info des forms on
                                    //rajoute dans server le midelware app.use(express.urlencoded....)
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown,
    })
    try{    // on stock la await article.save() dans un variable pour garder l'id
            article =  await article.save() // asyncrone fonction on rajoute avant (req,res) lo mot async
                                // et await just avant le sauvegarde

            res.redirect(`/article/${article.id}`) // apres le sauvegarde on redirect 
                                                    // vers la page de l'article en question
                    // juste après on creer la route  router.get('/:id', (req, res)=>{} 



    } catch (e) {
        res.render('articles/new', { article : article })
    }
       })

module.exports = router

 