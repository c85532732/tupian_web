var express = require('express');
var router = express.Router();
var funs=require('../app/funs')

/* GET home page. */
router.get('/', function(req, res, next) {
    var page = !req.query.page || req.query.page == "" ? 1 : parseInt(req.query.page)
    let params={
        page:page
    }
    funs.info.all(params,res);
});

router.get('/:cate', function(req, res, next) {
    let params={
        cate_id:req.params.cate
    }
    if(typeof params.cate_id!="number")res.redirect('/')
    funs.info.cate_list(params,res);
});


router.get('/single/:cate/:id', function(req, res, next) {
    let params={
        cate_id:req.params.cate,
        id:req.params.id
    }
    if(typeof params.id!="number")res.redirect('/')
    funs.info.info_detail(params,res);
});

module.exports = router;