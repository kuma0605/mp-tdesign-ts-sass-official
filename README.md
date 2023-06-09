# 小程序官方种子项目typescript+sass+tdesign

## tdesign引入方法
[微信小程序的ts模版项目中引入tdesign组件库](https://www.bilibili.com/read/cv22841632)
### 步骤：
    1.在微信开发者工具目录栏，右键，选择“在外部终端窗口中打开”
      cmd miniprogram //注意：这一步很重要
      npm init -y
      npm i tdesign-miniprogram -S --production
    2.进入微信开发者工具，执行菜单：工具 / 构建npm
    3.将 app.json 中的 "style": "v2" 移除。
    4.如果使用typescript开发，需要修改tsconfig.json指定paths
      {
        "paths": {
            "tdesign-miniprogram/*":["./miniprogram/miniprogram_npm/tdesign-miniprogram/*"]
          }
      }