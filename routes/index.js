const express =  require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.render('index')

})
// router.get('/sign-in', function(req, res){
//     res.send('sign-in route')

// })
// router.get('/sign-up', function(req, res){
//     res.send('sign-up route')

// })
module.exports = router