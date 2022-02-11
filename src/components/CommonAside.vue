<template>
  <div>
  <el-radio-group style="margin-bottom: 20px;">
    <!--直接对vueComponent实例中的数据进行修改-->
    <el-button @click="isCollapse=!isCollapse" ref="s" :type="isCollapse?'primary':''" >></el-button>
  </el-radio-group>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <!--从没有子菜单的数据中遍历所有的菜单-->
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>


  </el-menu>
  </div>
</template>


  <script>
    export default {
      //除了data属性VueComponent组件需要使用函数形式，其他的属性需要使用属性方式
      data() {
        return {
          isCollapse: true,
          //菜单数据由接口返回
          menu:[
            {
              path:'/',
              name:'home',
              label:'首页',
              icon:'s-home',
              url:'Home/Home'
            },
            {
              path:'/mall',
              name:'mall',
              label:'商品管理',
              icon:'video-play',
              url:'MallManage/MallManage'
            },
            {
              path:'/user',
              name:'usr',
              label:'用户管理',
              icon:'user',
              url:'UserMange/UserMange'
            },
            {
              label: '其他',
              icon: 'location',
              children:[
                  {
                    path:'/page1',
                    name:'page1',
                    label:'页面1',
                    icon:'setting',
                    url:'Other/PageOne'
                  },
                {
                  path:'/page2',
                  name:'page2',
                  label:'页面2',
                  icon:'setting',
                  url:'Other/PageTwo'
                }
              ]
            }
          ]
        };
      },
      computed:{
        //计算属性是为了在页面中不需要更多的表达式
        // success:"success",
        // primary:"primary"
         //过滤接口中没有子菜单的
         noChildren(){
           console.log(this.menu.filter(item=>!item.children))
           return this.menu.filter(item=>!item.children)
         },
         hasChildren(){
           return this.menu.filter(item=>item.children)
         }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        // toggleCollapsed() {
        //   console.log('111')
        //   this.isCollapse = !this.isCollapse;
        //   // if (!this.isCollapse){
        //   //   this.$refs.s.type='primary'
        //   // }
        //   // else{
        //   //   this.$refs.s.type=''
        //   // }
        //
        // },
      }
    }
  </script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
