<template>
  <div class="curl">
    <h1>{{ msg }} / {{ page}}</h1>
    <h2>{{ author }}</h2>
    <ul v-for="music in musics" :key="music.url">
      <li>{{ music.name }}</li>
      <br />
      <li>
        <img :src="music.album.picUrl" style="width:200px;" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue调用网易云接口",
      author: "泥猴啊",
      musics: [],
      page: "node代理"
    };
  },
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
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>