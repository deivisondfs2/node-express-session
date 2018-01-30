var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (req.session.nome) {
    res.redirect('/home');
  }else{
    res.render('login', { title: 'LOGIN' });
  }
});

router.post('/',	(req,	res,	next)=>	{
		if	(req.body.nome	!=	''	&&	req.body.senha	==	'1234')	{
				req.session.nome	=	req.body.nome;
				res.redirect('/home')
		}else{
				res.redirect('/');
		}
});

/* GET home page. */
router.get('/home', (req, res, next) => {
  if	(req.session.nome	!=	'')	{
				res.render('home',{
						session:	req.session,
						usuario:	req.session.nome
				});
		}else{
				res.redirect('/');
		}
});

router.get('/logout',	(req,	res,	next)=>	{
		req.session.destroy();
		res.redirect('/')
});

module.exports = router;
