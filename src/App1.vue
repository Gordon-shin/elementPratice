<template>
  <div id="app">
    <router-link to="/"><!--由router link 包含按钮去切换前端路由-->
      <el-button type="primary" icon="el-icon-edit">切换主页</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary" icon="el-icon-edit">切换用户页</el-button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
