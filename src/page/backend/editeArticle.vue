<template>
  <el-container>
    <el-form :model="article" label-width="100px"   style="width:70%;" class="mg-a fz12">
      <el-form-item label="文章标题:">
        <el-input v-model="article.title" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="作者:">
        <el-input v-model="article.author"  size="mini"></el-input>
      </el-form-item>
      <el-form-item label="创建时间:">
        <el-input v-model="article.date"  size="mini"></el-input>
      </el-form-item>
      <el-form-item label="简介:">
        <el-input v-model="article.des" type="textarea" :rows="5"  resize="none" class="fz12"></el-input>
      </el-form-item>
        <ckeditor :editor="editor" v-model="article.content" :config="editorConfig"></ckeditor>
    </el-form>
  </el-container>
</template>


<script>
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
          
      },
      article: {
        title:'',
        author:'',
        autorImg:'',
        content:'',
        date:'',
        des:'',
        tag:[],
        _id:''
      }
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    async getDetail() {
      let res = await this.$api.getArticleDetail({_id:this.$route.query.id})
      console.log(res,22)
      this.article = res.data
    }
  }
}
</script>

<style lang="less">
  
</style>