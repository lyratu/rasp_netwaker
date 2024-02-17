const express = require("express");
const cors = require("cors");
const wol = require("wake_on_lan");

const app = express();
const corsOptions = {
  origin: "http://127.0.0.1", // 允许的来源，可以是单个字符串或数组
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // 允许的HTTP方法
  credentials: true, // 是否允许发送Cookie
  optionsSuccessStatus: 204, // 预检请求成功的HTTP状态码
};

app.use(cors(corsOptions));
const port = 3000;

app.get("/", (req, res) => res.send("树莓派快速启动服务已启动"));
app.post("/start", function (req, res) {
  wol.wake("00:E2:69:61:C9:12")
  res.send({ code: 200, msg: "执行启动！" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
