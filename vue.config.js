const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 基本路径
    publicPath: "./",
    // 相对于打包路径index.html的路径
    indexPath: "index.html",
    // 文件输出目录
    outputDir: "dist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 生成的静态资源存放的目录
    assetsDir: "static",
    // webpack-dev-server相关配置
    devServer: {
        // // url地址
        // host: "api.project.com",
        // // 端口号
        // port: 8085,
        // // 配置是否是https
        // https: false,
        // // 配置自动启动浏览器
        // open: true,
        // // 启动热更新
        // hotOnly: true,
        // 配置代理，处理多个跨域
        //     proxy: {
        //         "/api": {
        //             target: "http://api.cdn.com:8090/api",
        //             changeOrigin: true,
        //             pathRewrite: {
        //                 "^/api": "/"
        //             }
        //         },
        //         "/api2": {
        //             target: "http://api2.cdn.com:8090/api2",
        //             changeOrigin: true,
        //             pathRewrite: {
        //                 "^/api2": "/"
        //             }
        //         }
        //     }
        },
        // 对内部的webpack进行更细粒度的修改
        chainWebpack: (config) => {
            // 修复热更新失效
            config.resolve.symlinks(true);
            //  如果使用多页打包，使用vue inspect --plugins 查看html是都在结果数组中
            config.plugin("html").tap((args) => {
                // 修复路由懒加载的报错
                args[0].chunksSortMode = "none";
                // 标题
                args[0].title = '个人主页'
                // 预解析
                // args[0].sourcePrefetch = sourcePrefetch;
                return args;
            });
            config
                .plugin('html')
                .tap(args => {

                    return args
                })
        },
        // css配置相关
        css: {},
        // PWA插件相关配置
        pwa: {
            iconPaths: {
                favicon32: 'favicon.ico',
                favicon16: 'favicon.ico',
                appleTouchIcon: 'favicon.ico',
                maskIcon: 'favicon.ico',
                msTileImage: 'favicon.ico'
            }
        },
        // 第三方插件配置
        pluginOptions: {}
    })
