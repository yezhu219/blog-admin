<template>
<div class="article">
  <el-table
    ref="filterTable"
    :data="tableData"
    border
    size="mini"
    @selection-change="sel"
    v-if="tableData.length>0"
    style="width: 100%">
    <el-table-column type="selection" width="50" label="全选"></el-table-column>
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
     
      :filters="getTextArray()"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
        v-for=" (tag,index) in scope.row.tag"
        :key="index"
        :color="getType(tag)"
        style="margin-right:5px;"
        disable-transitions>{{tag}}</el-tag>
      </template>
    </el-table-column>
     <el-table-column
      prop="create_time"
      label="发表时间"
      >
    </el-table-column>
    <el-table-column
    prop="update_time"
    label="更新时间"
    >
    </el-table-column>
    <el-table-column
      label="操作"
    >
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="editArticle(scope.row,scope.$index)">编辑</el-button>
        <el-button size="mini" type="danger" @click="deleteArticle(scope.row,scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row class="mt-20" v-if="tableData.length>0">
    <el-col :span="8">
      <el-button type="danger" @click="delSelected">删除选中</el-button>
       <el-button type="primary" @click="addArticle">写文章</el-button>
    </el-col>
    <el-col :span="8" :push="4">
      <el-pagination
        background
        :page-size="10"
        @current-change="handlePage"
        layout="prev, pager, next"
        :total="count">
      </el-pagination>
    </el-col>
  </el-row>
  <el-row v-if="tableData.length==0">
    <el-col class="text-c c-999">
      <p class=" mb-10">您还没有发布过文章~~~~</p>
      <el-button type="primary" @click="addArticle">写文章</el-button>
    </el-col>
  </el-row>
  <!-- <div class="mutiple mt-20">
    <el-button type="primary" @click="delSelected">删除选中</el-button>
  </div> -->
</div>
</template>


<script>
 import moment from 'moment';
  export default {
    data() {
      return {
        tableData: [],
        selected:[],
        count:null,
        pageSize:10,
        pageNumber:1,
        tagList:[]
      }
    },
    async created(){
     
      this.initData()
    },
    methods: {
      async initData(){
        let list = await this.$api.getArticleList({pageSize:this.pageSize,pageNumber:this.pageNumber})
        let data = await this.$api.getClassify()
        console.log(data,'list')
        this.tableData = list.data.data
        this.count = list.count
        this.tagList = data
      },
      handlePage(val){
        this.pageNumber = val
        this.initData()
      },
      formate(row,column){
        // console.log(row,column)
      },
      formatter(row, column) {
       let time = row.date
       let times= moment(time).format(`YYYY.MM.DD   hh:mm:ss`)
        return times
      },
      filterTag(value, row) {
        console.log(value,row,222)
        return row.tag.includes(value)
      },
      editArticle(data,index){
       
       this.$router.push({path:'/backend/editeArticle',query:{id:data.id}})
      },
      async deleteArticle(data,index){
        let res = await this.$api.delArticleOne(data)
        console.log(res,111)
        if(res) {
          this.$message({
            showClose:true,
            message:'删除成功',
            type:'success'
          })
        }else {
          this.$message({
            showClose:true,
            message:'删除失败',
            type:'error'
          })
        }
        
        this.initData()
      },
      sel(data){
        console.log(data)
        this.selected = data

      },
      async delSelected() {
        let ids = this.selected.map(item=>item.id)
        console.log(ids,'ids')
        let res =await this.$api.delArticleMany({ids})
        if(res) {
          this.$message({
            showClose:true,
            message:'删除成功',
            type:'success'
          })
        }else {
          this.$message({
            showClose:true,
            message:'删除失败',
            type:'error'
          })
        }
        
        this.initData()
      },
      getTextArray() {
        const arr= []
        this.tableData.forEach(item=>{
         item.tag.forEach(v=> {
           if(arr.length != 0) {
            let bool= arr.some(i=> i.text==v)
            if(!bool) arr.push({text:v,value:v})
           }else {
             arr.push({text:v,value:v}) 
           }
         })
        })
        console.log(arr,111)
        return arr
      },
      getType(tag) {
        let res = this.tagList.find(item=>item.name == tag)
        return res.color
      },
      addArticle() {
        console.log('aaa')
        this.$router.push({path:'/backend/editeArticle'})
      }
     
    }
  }
</script>

<style lang="less">
 .el-table .red {
  background-color: #f33333;
}
 .el-table .green {
  background-color: lightblue;
}
</style>
