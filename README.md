# miniapp-cms
## description
万事利小程序的微信端，用于小程序开发
## 参与人员
- 阮琦珺（项目经理）
- 常鸿飞（前端开发）
- 吴雄琉（服务端开发）

## 相关说明
#### # 参考文档
[小程序相关文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)

[微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp)

[微信小程序开源项目库汇总](https://github.com/opendigg/awesome-github-wechat-weapp)

#### # 开发说明

[开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)

- app.js 中 全局参数 `serverPath` 为服务器地址，正式上线发布前请改用证书地址

部分结构
```
    └── pages // 页面资源
        └── index // 起始页模块
        └── common // 列表模板
        └── detail // 详情页模块
    └── utils // 工具库
        └── wxParse // 富文本转换为 wxml
```