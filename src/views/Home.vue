<template>
  <!--首页布局-->
  <el-container style="height:100%">
    <el-aside width="auto"><CommonAside/></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
export default {
  name: "Home",
  components:{
    CommonAside
  },
  data(){
    return {}
  }
}
</script>

<style scoped lang="less">
.el-header{
  background-color:#333;
}
.el-main{
  padding-top:0;
}

</style>