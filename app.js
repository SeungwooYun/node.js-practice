const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');

// body-parser은 함수 끝에 이미 next()가 적혀있음 그래서 따로 안해도 됨
app.use(bodyParser.urlencoded({extended: true}));


// app.use(('/', req, res, next)=>{
// 라고 되어 있으면 '/' 뿐 아니라 /로 시작하는 모든 것에 적용됨 
// 그러니까 /abc를 쓰고 싶으면 / 위쪽에서 미들웨어 등록해줘야하는 거임
// get, post, put etc.. 는 정확하게 '' 안의 루트와 매치돼야 함. use 만 ~로 시작하는 거임


// 이 라우터 첫번째 아규먼트에 '/admin' 넣어주면 두번째 /admin/두번째 아규먼트 필드로 들어가게됨  
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found</h1>")
});
// 에러처리


app.listen(3000);