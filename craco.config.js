const cracoSassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')

module.exports = {
    // webpack 配置
    webpack: {
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        {
            plugin: cracoSassResourcesLoader,
            options: {
                resources: path.resolve(__dirname, 'src/styles/variables.scss')
            }
        }
    ]
}