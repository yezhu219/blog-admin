<template>
<div class="article">
  <el-table
    ref="filterTable"
    :data="tableData"
    border
    size="mini"
    @selection-change="sel"
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
        :type="getType(tag)"
        style="margin-right:5px;"
        disable-transitions>{{tag}}</el-tag>
      </template>
    </el-table-column>
     <el-table-column
      prop="ctime"
      label="发表时间"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
    prop="updatedTime"
    label="更新时间">
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
  <div class="mutiple mt-20">
    <el-button type="primary" @click="delSelected">删除选中</el-button>
  </div>
</div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [
        //   {
        //   date: '2016-05-02',
        //   name: '王小虎1',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   tag: '家',
        //   id:'21'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎2',
        //   address: '上海市普陀区金沙江路 1517 弄',
        //   tag: '公司',
        //   id:'21'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎3',
        //   address: '上海市普陀区金沙江路 1519 弄',
        //   tag: '家',
        //   id:'21'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎4',
        //   address: '上海市普陀区金沙江路 1516 弄',
        //   tag: '公司',
        //   id:'21'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎5',
        //   address: '上海市普陀区金沙江路 1519 弄',
        //   tag: '家',
        //   id:'21'
        // },
        //  {
        //   date: '2016-05-01',
        //   name: '王小虎6',
        //   address: '上海市普陀区金沙江路 1519 弄',
        //   tag: '家',
        //   id:'21'
        // }
        ],
      selected:[]
      }
    },
    async created(){
      let {list} = await this.$api.getArticleList()
      this.tableData = list
    },
    methods: {
      
      formatter(row, column) {
        return row.date;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      editArticle(data,index){
        console.log(data,index)
      },
      deleteArticle(data,index){
        this.tableData.splice(index,1)
      },
      sel(data){
        console.log(data)
        this.selected = data

      },
      delSelected() {

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
        switch(tag) {
          case 'js':
            return 'sucess'
          case 'html':
            return 'info'
          case 'css':
            return  'danger'
          default:
            return 'warning'
        }
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
