const http = require("http");
const fs = require("fs");

const requestObj = (req, res) => {

    let filepath = "";

    if (req.url === "/") {
        filepath = "./index.html";

    } else if (req.url === "/about") {
        filepath = "./about.html";

    } else if (req.url === "/product") {
        filepath = "./product.html";

    } else {
        filepath = "./notfound.html";
    }

    try {
        let data = fs.readFileSync(filepath, "utf-8");
        res.end(data);
    } catch (err) {
        res.end("Error loading page");
    }
};

const server = http.createServer(requestObj);

server.listen(8000, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server started at http://localhost:8000");
});