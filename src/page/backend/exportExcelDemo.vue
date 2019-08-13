<template>
 <div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      v-if="showAge()"
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    
  </el-table>
  <el-button type="primary" @click="handleDownload" :loading="downloadLoading" class="mt-20">导出为excel</el-button>
  <el-button type="primary" @click="handleUplaod" :loading="downloadLoading" class="mt-20">导入excel数据</el-button>
  <input type="file" v-show="false" ref="uploadExcel" accept=".xls,.xlsx" @change="readExcel">
 </div>
</template>

<script>
import XLSX from 'xlsx'
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          age:''
        }, {
          date: '2016-05-04', 
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          age:''
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          age:''
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          age:''
        }],
        downloadLoading:false,
        arrList:[],
        show: false
      }
    },
    methods: {
    handleDownload() {
      this.downloadLoading = true
      require.ensure([], () => {
        const { export_json_to_excel } = require('@/vendor/Export2Excel')
        const tHeader = ['日期', '姓名', '地址','ceshi']
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel')
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleUplaod(){
      this.$refs.uploadExcel.click()
    },
    readExcel(e) {
     const files = e.target.files;
      if (files.length <= 0) {
          //如果没有文件名
          return false;
      }
      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary"
              
          });
        const wsname = workbook.SheetNames[0]; //取第一张表
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //获取到XLSX表格中的数据,并生成json格式的数据类型
        console.log(ws,666);
         const arr = this.formateKey(ws) 
         console.log(arr,777) 
         arr.forEach(item=> this.tableData.push(item)) 
      } catch (e) {
         console.log(e)
        }
      }
      fileReader.readAsBinaryString(files[0]);
    },
    showAge(){
      const res= this.tableData.every(item=> item.age !='') 
      // console.log(res,1111)
      return res
    },
    formateKey(data) {
      let arr= []
      data.forEach(item=>{
        arr.push({
          address:item['地址'],
          name:item['姓名'],
          date:item['日期'],
          age:item['年龄'],
        })
      })
      return arr
    }
  },
  created(){
    // this.showAge()
  }
}
</script>