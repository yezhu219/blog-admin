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
        <el-table-column prop="type" label="颜色" width="200"></el-table-column>
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
        <el-form :model="classifyData" label-width="100px">
          <el-form-item label="分类名称">
            <el-input v-model="classifyData.name"></el-input>
          </el-form-item>
          <el-form-item label="颜色">
            <el-select v-model="classifyData.color">
              <el-option label="danger1" value="danger1"></el-option>
              <el-option label="danger2" value="danger2"></el-option>
              <el-option label="danger3" value="danger3"></el-option>
              <el-option label="danger4" value="danger4"></el-option>
              <el-option label="dange5" value="danger5"></el-option>
            </el-select>
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
      classifyData: {
        name: '',
        type: ''
      }
    }
  },
  created() {},
  methods: {
    addClassify() {
      this.showAdd = true
    },
    editClassify(data) {},
    delClassify(data) {},
    submitAdd() {
      this.showAdd = false
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