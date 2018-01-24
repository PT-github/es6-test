#学习地市 http://es6.ruanyifeng.com

#1：在项目中安装babel-cli转码工具
>npm install --save-dev babel-cli

#使用方法
##############################################
# 转码结果输出到标准输出
# babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
# babel example.js --out-file xxx.js
# 或者
# babel example.js -o xxx.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
# babel src --out-dir lib
# 或者
# babel src -d lib

# -s 参数生成source map文件
# babel src -d lib -s
##############################################

#2：改写package.json。
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d dist"
  },
}

#3:转码
>npm run build