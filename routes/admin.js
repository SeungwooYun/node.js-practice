const express = require('express');
// 익스프레스가 라우터를 제공함. - export 가능
const router = express.Router();

// Router.use 이런 식으로 미들웨어 라우터 설정 가능함
router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></from>');
    })


// app.use에서 쓸 수 있는 필터링이 5개 정도 되는데 그 중 대표적인 게 post 랑 get  - delete, patch, put 도 있음. http 문법 
router.post("/product", (req, res, next)=> {
    // 여기서 req는 body 를 자동으로 parsing 하지 않음 
    // body-parser 패키지 설치해줘야함
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;