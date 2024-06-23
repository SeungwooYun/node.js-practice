const http = require('node:http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    // console.log("url", req.url, "method", req.method, "headers", req.headers);
    const url = req.url; 
    // parsing url
    const method = req.method;

    res.setHeader("Content-Type", "text/html");
    if(url==="/"){
        res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body>");
    res.write("</html>");
    return res.end();    
}
if(url==="/message" && method==="POST"){
fs.writeFileSync("message.txt", "Dummy")
res.statusCode = 302;
res.setHeader('Location', "/");
return res.end()
}
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello, this is my first html respnse</h1></body>");
    res.write("</html>");
    res.end();
    // end 이후에는 write 더 쓰면 안됨. 오류.
});
// creatServer은 requestLister를 필요함 
// 안에 리스너 화살표 함수를 넣어준 거고, req를 console.log 하라고 함.
//server 타입 중 listen 을 걸어주고 포트넘버를 적어주면 계속 요청을 들음
// run 했을 때 계속 돌아가게 되는 것임
// 로컬에서 3000으로 한 경우라면 localhost:3000 으로 들어가겠지만, 코드스페이스에서 하는 경우라면 forwarded address 로 먹는구나  
// https://orange-space-yodel-vj9q56qgq7qf5w9-3000.app.github.dev/ 여기 접근했을 시 서버가 바로 확인한다.
server.listen(3000);
