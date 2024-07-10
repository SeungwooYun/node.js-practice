const http = require('node:http');
const routes = require('./routes.js');


const server = http.createServer(routes);
// creatServer은 requestLister를 필요함 
// 안에 리스너 화살표 함수를 넣어준 거고, req를 console.log 하라고 함.
//server 타입 중 listen 을 걸어주고 포트넘버를 적어주면 계속 요청을 들음
// run 했을 때 계속 돌아가게 되는 것임
// 로컬에서 3000으로 한 경우라면 localhost:3000 으로 들어가겠지만, 코드스페이스에서 하는 경우라면 forwarded address 로 먹는구나  
// https://orange-space-yodel-vj9q56qgq7qf5w9-3000.app.github.dev/ 여기 접근했을 시 서버가 바로 확인한다.
server.listen(3000);
