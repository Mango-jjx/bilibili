 //index.js 服务启动文件
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// Body parser，用来封装 req.body
app.use(bodyParser.json())

// Sessions 来创建 req.session 
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

// 我们用这些选项初始化 nuxt.js;
const isProd = process.env.NODE_ENV === 'production'
let config = require('./nuxt.config')//nuxt的配置文件
config.dev = isProd;
const nuxt = new Nuxt(config);

app.use(nuxt.render)//自己定义的路由写它上边

app.listen(8888)