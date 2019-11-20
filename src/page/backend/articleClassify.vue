<template>
  <div class="classify">
    <el-button type="primary" class="mb-20" @click="addClassify" >增加分类</el-button>
    <div class="table-classify" v-if="classify.length>0">
      <el-table :data="classify" size="mini" border>
        <el-table-column type="index"></el-table-column>
        <el-table-column
          prop="name"
          label="分类名"
          width="200"
        ></el-table-column>
        <el-table-column  label="颜色" width="200">
          <template slot-scope="scope">
              <div :style="`background-color:${scope.row.color};`" style="width:40px;height:20px;"></div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="editClassify(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="delClassify(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      
    </div>

    <el-dialog :title="title" center :visible.sync="showAdd" >
        <el-form :model="tag" label-width="100px">
          <el-form-item label="分类名称">
            <el-input v-model="tag.name"></el-input>
          </el-form-item>
          <el-form-item label="颜色" >
            <el-color-picker
              v-model="tag.color"
              show-alpha
              :predefine="predefineColors">
            </el-color-picker>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button type="primary" @click="submitAdd" > 提交</el-button>
          <el-button type="warning" @click="closeDialog" > 取消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classify: [ ],
      showAdd: false,
      tag: {
        name: '',
        color: ''
      },
      color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      title:'添加分类',
      type:'add'
    }
  },
  created() {
    this.getTag()
  },
  methods: {
    async addClassify() {
      console.log('click')
      this.showAdd = true
    },
    async getTag(){
      let res = await  this.$api.getClassify({})
      this.classify = res
    },
    editClassify(val) {
      this.tag =val

      this.type="edite"
      this.title = "编辑分类"
       this.showAdd = true
    },
    async delClassify(val) {
      this.$confirm('确认删除分类?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async ()=>{
          let data = await this.$api.delClassify({id:val.id})
          this.showTip(data,'删除')
          this.getTag()
        })
        
    },
    async submitAdd() {
      if(this.tag.name==''||this.tag.color=='') {
        this.$message({
          showClose:true,
          message:'请输入分类名称或者颜色',
          type:'error'
        })
        return
      }
      if(this.type == 'add') {
        let  data  = await this.$api.addClassify(this.tag)
        this.showTip(data,'添加')
      }else {
        let res = await this.$api.editeClassify(this.tag)
         this.showTip(res,'编辑')
        this.type='add'
        this.title = '添加分类'
        }
      this.getTag()
      this.tag.name = this.tag.color = ''
      this.showAdd = false
    },
    showTip(data,msg) {
      if(data) {
        this.$message({
          showClose: true,
          message: msg+'成功',
          type: 'success'
        })
      }else {
        this.$message({
          showClose: true,
          message: msg+'失败',
          type: 'error'
        })
      }
    },
    closeDialog(){
      this.showAdd = false
    }
  }
}
</script>

<style lang="less">

.table-classify {
  width: 600px;
}
</style>