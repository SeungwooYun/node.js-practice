const fs = require('fs');


const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const url = req.url;
    const method = req.method
    if(url==="/"){
        res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body>");
    res.write("</html>");
    return res.end();    
    }
    if(url==="/message" && method==="POST"){
    
    const body = [];
    req.on("data", (chunk)=>{
    console.log(chunk)
    body.push(chunk)
    })
    
    // 리스너를 달아주고 데이터를 모음
    // data이벤트는 모든 chunk 가 준비될 때마다 fired 됨
    req.on("end", ()=>{
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];
    console.log(parsedBody);
    //  Buffer 오브젝트는 node.js에서 그냥 제공해주는 거임 
    // body를 parsing 하는 것임 
    
    fs.writeFileSync("message.txt", message)
    })
    // chunk 다 모으고 나면 end 안에서 buffer 하는 거임
    
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
}

module.exports = requestHandler;