module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 5001
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compiler = require('vue-template-babel-compiler')
                return options
            })
    }
}