# 记录

npm init -y
cnpm i express --save
cnpm art-template --save
cnpm express-art-template --save

新建app.js

vue init webpack webapp  --> 新建webapp文件

修改config.js中打包路径: index.html为'../../views/index.html',dist为'../../dist'
修改config.js代理:
    `proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },`
然后就有了dist和views目录，express貌似会去views下找html，然后设置app.use('/static', express.static(path.join(__dirname, 'dist/static')))为静态文件目录

新建.gitignore文件

新建api文件夹，用于存放后台文件，里面建个index.js: app.js里写/user，api里写/users，则在vue里写api/user/users进行访问
