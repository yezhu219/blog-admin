# blog后台

## 1. 功能

1.1  文章搜索

1.2  文章编辑

1.3  文章导出

1.4  后台登录页
1.4.1 登录验证及将token保存到store中 

1.5  文章看板（文章阅读，点击排行）

1.6  文章分类，标签

1.7  查看，回复留言

1.8 爬取文章（按钮指定来源）

## 2. 问题记录

### 1. 全局导入less文件
- 安装less及less-loader，不要在rules中配置loader，否则会报错
- 引用时注意引用顺序，会导致样式被层叠掉

### 2. 配置favicon图标
- 在`webpack.dev.conf`及`webpack.prod.conf HtmlWebpackPlugin`中添加`favicon: path.resolve('./static/favicon.ico')`

### 3. table 配置class

```js
rowClass({row,rowIndex}) {
        console.log(rowIndex%2)
        if(rowIndex%2==1) {
          return ''
        }
        return 'green'
      }
//  样式必须加上.el-table父类     
```     
### 4. 表格导出为excel
1. 下载 Blob.js及Export2Excel.js
2. 安装 file-saver  xlsx -S    全局安装script-loader -D
3. 导出方法

```js
handleDownload() {
      this.downloadLoading = true
      require.ensure([], () => {
        const { export_json_to_excel } = require('@/vendor/Export2Excel')
        const tHeader = ['日期', '姓名', '地址']  
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel') //参数 表头，数据来源，文件名
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
```    
