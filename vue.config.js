module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://1.116.64.64:5004/api2/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    chainWebpack(chainableWebpack) {
        chainableWebpack.resovle = { extensions: ['.js', '.ts', '.json', '.d.ts']}
    }
}