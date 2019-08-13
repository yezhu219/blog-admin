<template>
  <el-container class="backend-index">
    <el-header class="header box-s2">
      <b-header></b-header>
    </el-header>
    <el-container>
      <el-aside width="150px" class="box-s2">
        <el-menu  background-color="#8ddad5" class="b-aside" default-active="dashboard" @select="handleSelect">
          <template v-for="item in navList " >
            <el-menu-item :index="item.path" :key="item.index" v-if="!item.children">{{item.name}}</el-menu-item>
            <el-submenu  v-if="item.children" :index="item.index" :key="item.index">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="it in item.children" :key="it.index" :index="it.path">{{it.name}}</el-menu-item>
              </el-submenu> 
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="pd-20">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="fz12 mb-20">
            <el-breadcrumb-item v-for="(item,index) in breadLIst" :key="index" :to="item.name">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <el-footer class="text-c b-footer"> @POWERED BY  WangBing</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import bHeader from '@/components/b-header'
import bAside from '@/components/b-aside'
export default {
  data() {
    return {
      navList:[
        {name:"首页",path:'dashboard',index:'1'},
        // {name:'文章管理',children:[{name:'编辑' },{name:'搜索'}]},
        {name:'文章管理', index:'2',children:[
          {name:'文章列表',path:'article',index:'2-1'},
          {name:'文章分类',path:'articleClassify',index:'2-2'},
          {name:'excel导入导出',path:'exportExcelDemo',index:'2-3'}
          ]},
        { name:'Demo案例',index:'3',children:[
          {name:'截图',path:'toImg',index:'3-1'},
          // {name:'文章分类',path:'articleClassify'},
          // {name:'excel导入导出',path:'exportExcelDemo'}
        ]},  
        {name:'爬取文章',path:'crawler',index:'4'},
        {name:'设置',path:'setting',index:'5'},
      ],
      breadLIst:[]

    }
  },
  created() {
    this.getBreadList()
  },
  watch:{
   $route(){
     this.getBreadList()
   }
 },
  methods: {
    getBreadList() {
      const matched = this.$route.matched.filter(item=>item.name)
      this.breadLIst = matched
    },
    handleSelect(key, keyPath) {
      this.$router.push(key)
      }
  },
  components: {
    bHeader,
    bAside,
  }

}
</script>

<style lang="less">
.backend-index {
  .header {
    background-color: #8ddad5;
    margin-bottom: 2px;
  }
  .b-aside {
    height: 100%;
  }
  .b-footer {
    box-shadow: 2px 2px 9px 1px rgba(0, 0, 0, 0.1);
    line-height: 60px;
  }
}
</style>
