<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <h2>{{ author }}</h2>
    <ul v-for="music in musics" :key="music.url">
      <li>
        {{ music.name }}
      </li><br>
      <li>
        <img :src="music.album.picUrl" style="width:200px;">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
data() {
    return {
      msg: "vue 调用网易云接口",
      author: "kkk",
      musics:[]
    }
  },
  created(){
    this.getUrl()
  },
  component:{
    Node
  },
  methods:{
    getUrl(){
      axios.get(API_PROXY+'http://music.163.com/api/playlist/detail?id=19723756')
      .then((res)=>{
        console.log(res)
        this.musics=res.data.result.tracks
      },(error)=>{
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>