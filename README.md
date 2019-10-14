# -vue-axios-vue-resource-vue-
使用vue-axios和vue-resource解决vue中调用网易云接口跨域的问题

1. 远程代理

就是利用别人写好的代理接口，代理发送你的请求，这样就不会跨域了。

首先我们定义一个常量API_PROXY

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

然后在axios请求里面拼接一下字符串

2. node代理

打开config/index.js
修改proxyTable: {}部分
修改为

    proxyTable: {
      '/api': {
        target: 'http://music.163.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
第一行的'/api'指的是虚拟路径
target指的是目标地址，也就是实际api的地址
pathRewrite规则重写
然后在代码页面修改一下请求地址

    mounted() {
      this.$http.get('/api/playlist/detail?id=19723756', {}, {
        headers: {

      },
      emulateJSON: true
      }).then((res)=> {
        this.musics = res.data.result.tracks
        console.log(this.musics)
      }, (error)=>{
        console.log(error)
      })
    }

作者：iMax

链接：https://juejin.im/post/5a5f1c94518825733d6918d9

来源：掘金
