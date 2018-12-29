# 记录

npm init -y

cnpm i express --save

cnpm art-template --save

cnpm express-art-template --save

新建app.js

vue init webpack webapp  --> 新建webapp文件

修改config.js中打包路径:
index.html为'../../views/index.html',dist为'../../dist'

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

webapp下安装npm包：
cnpm install node-sass --save-dev
cnpm install sass-loader --save-dev
cnpm install axios --save

webapp下新建api/index.js，配置axios参数，然后添加了config下dev.env.js和prod.env.js中的BASE_API参数，这样则写在vue里的就是user/users不需要加api了

IE下报Promise未定义，安装npm包：cnpm install --save-dev webpack-server -- 然而并不能解决报错

config/index.js下改成cssSourceMap: false，去掉打包后的.map文件
