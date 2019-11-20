<template>
  <div>
    <el-form :model="article" label-width="100px" :rules="rules"  style="width:70%;" class="mg-a fz12">
      <el-form-item label="文章标题:" prop="title">
        <el-input v-model="article.title" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="作者:" prop="author">
        <el-input v-model="article.author"  size="mini"></el-input>
      </el-form-item>
      <!-- <el-form-item label="创建时间:">
        <el-input v-model="article.date"  size="mini"></el-input>
      </el-form-item> -->
      <el-form-item label="分类:" prop="tag">
        <el-select v-model="article.tag" multiple >
          <el-option v-for="(item,index) in  tagList" :key="index" :value="item.name">{{item.name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介:" prop="des">
        <el-input v-model="article.des" type="textarea" :rows="2"  resize="none" class="fz12"></el-input>
      </el-form-item>
      <div class="mb-20"></div>
      <Editor id="tinymce" v-model="article.content" :init="init"></Editor>
    </el-form>
    <el-row class="text-c mt-20">
      <el-button type="primary" @click="saveArticle">提交</el-button>
      <el-button type="warning" @click="$router.go(-1)">返回</el-button>
    </el-row>
  </div>
</template>


<script>
import tinymce from 'tinymce/tinymce'

import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  data() {
    let _this = this
    return {
      tinymceHtml:'1111111',
      article: {
        title:'',
        author:'',
        authorImg:'',
        content:'',
        date:'',
        des:'',
        tag:[],
        from:'',
        like:'',
        view:'',
        isDel:'',
        desImg:'',
      },
      rules:{
        title:[{required:true,message:'请输入标题',trigger:'blur'}],  
        author:[{required:true,message:'请输入作者',trigger:'blur'}],  
        des:[{required:true,message:'请输入简介',trigger:'blur'}],  
        tag:[{required:true,message:'请输入分类',trigger:'blur'}],  
      },
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/ui/oxide',
        height: 600,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        images_upload_url:'http://127.0.0.1:3001/v1/',  //配置图片上传服务器，没有不显示可以上传本地图片，
          // 图片上传三个参数，图片数据，成功时的回调函数，失败时的回调函数
        async images_upload_handler (blobInfo, success, failure) {
          // if (blobInfo.blob().size > _this.maxSize) {
          //   failure('文件体积过大')
          // }
          // if (_this.accept.indexOf(blobInfo.blob().type) >= 0) {
          //   uploadPic()
          // } else {
          //   failure('图片格式错误')
          // }
          
            let formData = new FormData()
            formData.append('img', blobInfo.blob(), blobInfo.filename())
            // 查看formData
          //  let aa= formData.getAll('img')
          //  console.log(aa,2222)

            _this.$api.upLoadImg(formData).then(res=>{
              //success 会把返回的url显示到富文本地址中
              success(res.data.url)
            }).catch(()=>{
              failure('上传失败')
            })
        }

        },
      value:[],
      tagList:[]
    }
  },
  created() {
    this.getClassify()
    if(!this.$route.query.id) return
    this.getDetail()
  },
  mounted() {
    tinymce.init({})
  },
  components:{
    Editor
  },
  methods: {
    async getDetail() {
      let res = await this.$api.getArticleDetail({id:this.$route.query.id})
      this.article = res
      this.value = res.tag
    },
    async getClassify() {
      let data = await this.$api.getClassify()
      this.tagList= data
      if(data.length==0) {
        console.log('bbb')
        this.$confirm('您还没有分类，请先添加分类。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/backend/articleClassify')
        }).catch(() => {
                    
        })
        return 
      }
    },
    async saveArticle() {
      let res = await this.$api.updateArticle(this.article)
      if(res) {
         this.$message({
           showClose:true,
           message:'保存成功',
           type:'success'
         })
      }
    }
  }
}
</script>

<style lang="less">
  
</style>