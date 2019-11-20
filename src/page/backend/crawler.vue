<template>
  <div>
     <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column width="60" v-if="show">
      <template slot-scope="scope" v-if="show">
        <div class="box">
          <i class="el-icon-share ishide"></i>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="序号"
      width="50">
      <template slot-scope="scope">
        <div @click="test">
          <el-input v-show="!toggle"></el-input>
          <span v-show="toggle">{{'00'+scope.$index}}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      v-if="show"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
    <el-button @click="isShow">隐藏</el-button>
  </div>
  </div>
</template>

<script>
export default {
 data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          index: '001'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          index: '002'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          index:' 003'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          index: '004'
        }],
        currentRow: null,
        show:true,
        toggle:true
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      isShow () {
        this.show=!this.show
      },
      test() {
        console.log(23333)
        this.toggle = false
      }
    }
}
</script>

<style lang="less">
.ishide {
  opacity: 0;
}
.box {
  height: 100%;
  background-color: red;
}

</style>
