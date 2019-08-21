<template>
<el-container>
  <el-row v-if="list.length>0">
    <el-row class="mb-20 pd-10 fz20 ">
      <el-col :span="11" class="pdl-20">标题</el-col>
      <el-col :span="10" class="pdl-20">作者</el-col>
    </el-row>
    <el-col v-for="(item,index) in list" :key="index" class="mb-20 search-item pd-10 cp" @click.native="getDetail(item)">
      <el-col :span="1">{{index}}.</el-col>
      <el-col :span="10">{{item.title}}</el-col>
      <el-col :span="10">{{item.author}}</el-col>
    </el-col>
  </el-row>
  <el-col v-else class="text-c c-666">您搜索的内容没有找到，换个关键词试试 ~~~</el-col>
</el-container>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
     list :[],
     count:1,
    }
  },
  created() {
    this.init()
  },
  watch:{
    $route(to,from){
      this.init()
    }
  },
  methods: {
    async init() {
      console.log('aaaa')
     let {data}= await this.$api.search({ keyWrod: this.$route.query.keyWord })
      this.list = data.data
    },
    getDetail(data){
       this.$router.push({path:'/backend/editeArticle',query:{id:data._id}})
    }
  }
}
</script>

<style lang="less">
  .search-item {
    border-bottom: 1px solid #f5f5f5;
    &:hover{
      box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

    }
  }
</style>