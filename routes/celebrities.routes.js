const express = require(`express`)
const router = express.Router()
const Celebrity = require(`../models/Celebrity.model`)

router.get(`/celebrities/create`, (req, res) => {
    res.render(`celebrities/new-celebrity`)
})

router.post(`/celebrities/create`, (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect(`/celebrities`))
        .carch((err) => res.render(`celebrities/new-celebrity`, { error }))

})

router.get(`/celebrities`, (req, res) => {
    Celebrity.find().then(celebrities => {
        res.render(`celebrities/celebrities`, { celebrities })
    })
        .catch(error => {
            res.render(`error`, { error })
        })
})

module.exports = router