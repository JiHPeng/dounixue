module.exports = {
    publicPath: './', // 根路径
    outputDir: 'dounixue', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录（js,css,img,fonts）
    lintOnSave: false, // 是否开启eslint保存检测，有效值:true || false || "error"
    devServer: {
        open: true, // 浏览器自动打开页面
        // host: 'localhost', // 域名
        // host: "0.0.0.0", // 如果是真机测试，就使用这个IP
        port: 8080,
        https: false,
        hotOnly: false, // 热更新（webpack已实现了，这里false即可）
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://www.baidu.com',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
