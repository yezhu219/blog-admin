<template>
  <div class="classify">
    <el-button type="primary" class="mb-20" @click="addClassify"
      >增加分类</el-button
    >
    <div class="table-classify">
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
      <el-dialog title="添加分类" center :visible.sync="showAdd" >
        <el-form :model="tag" label-width="100px">
          <el-form-item label="分类名称">
            <el-input v-model="tag.name"></el-input>
          </el-form-item>
          <el-form-item label="颜色" >
            <!-- <el-select v-model="classifyData.color">
              <el-option label="danger1" value="danger1"></el-option>
              <el-option label="danger2" value="danger2"></el-option>
              <el-option label="danger3" value="danger3"></el-option>
              <el-option label="danger4" value="danger4"></el-option>
              <el-option label="dange5" value="danger5"></el-option>
            </el-select> -->
            <el-color-picker
              v-model="tag.color"
              show-alpha
              :predefine="predefineColors">
            </el-color-picker>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button type="primary" @click="submitAdd" > 提交</el-button>
          <el-button type="warning" @click="showAdd=false" > 取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classify: [
        { id: 1, name: 'js', type: 'warning' },
        { id: 1, name: 'html', type: 'warning' },
        { id: 1, name: 'css', type: 'warning' },
        { id: 1, name: 'node', type: 'warning' }
      ],
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
        ]
    }
  },
  created() {
    this.getTag()
  },
  methods: {
    async addClassify() {
      this.showAdd = true
    },
    async getTag(){
      let res = await  this.$api.getClassify({})
      this.classify = res.data.data
    },
    editClassify(data) {},
    delClassify(data) {},
    async submitAdd() {
      this.showAdd = false
      let {data} = await this.$api.addClassify(this.tag)
      if(data.data=='success') {
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        })
      }else {
        this.$message({
          showClose: true,
          message: '添加失败',
          type: 'error'
        })
      }
      this.getTag()
    }
  }
}
</script>

<style lang="less">
// .classify {
//   min-width: 800px;
// }
.table-classify {
  width: 600px;
}
</style>