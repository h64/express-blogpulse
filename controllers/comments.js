const router = require('express').Router();
const db = require('../models');

router.post('/', (req, res ) => {
    db.comment.create(req.body)
    .then(() => {
        res.redirect('/articles/' + req.body.articleId)
    })
})

router.delete('/:id', (req, res) => {
    db.comment.destroy({
        where: { id: req.params.id }
    })
    .then(returnValue => {
        console.log(returnValue);
        res.redirect('/articles/'+ req.body.articleId)
    })
    .catch(err => {
        console.log(err);
        res.send("PANIC");
    })
})

module.exports = router;