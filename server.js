//1. 引入express
// const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.all('/server', (request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应体
  response.send('HELLO AJAX POST');
});

app.all('/json-server', (request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers','*');
  //响应一个数据
  const data = {
    name: 'Gandazhuang'
  };
  //对对象进行字符串进行转换
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

//针对 IE 缓存
app.get('/ie',(request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置响应体
  response.send('HELLO IE - 2');
})

//延时响应
app.all('/delay',(request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  //加定时器
  setTimeout(()=>{
  //设置响应体
  response.send('延时响应');
  },1000)
})

//jQuery 服务
app.all('/jquery-server',(request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应体
  // response.send('HELLO JQUERY AJAX');
  const data = {
    value1:'猜你要搜',
    value2:'数据运营',
    value3:'数据分析实习',
    value4:'数据挖掘算法工程师',
    value5:'统计',
    value6:'实习',
    value7:'算法工程师',
    value8:'分析师',
    value9:'数据挖掘分析师',
    value10:'bi',
    value11:'数据仓库',
  };
  response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server',(request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应体
  // response.send('HELLO JQUERY AJAX');
  const data = [
    {value:'猜你要搜'},
    {value:'数据运营'},
    {value:'数据分析实习'},
    {value:'数据挖掘算法工程师'},
    {value:'统计'},
    {value:'实习'},
    {value:'算法工程师'},
    {value:'分析师'},
    {value:'数据挖掘分析师'},
    {value:'bi'},
    {value:'数据仓库'},
  ];
  response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server',(request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应体
  // response.send('HELLO JQUERY AJAX');
  const data = {name: '甘大壮'};
  response.send(JSON.stringify(data));
});



//4. 监听端口启动服务
app.listen(5000, ()=>{
  console.log('服务已经启动，5000 端口监听中。。。');
})