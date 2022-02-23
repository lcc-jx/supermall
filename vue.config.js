// const { resolve } = require("core-js/fn/promise");

// 将这些配置与一些（node modules）公共配置进行合并
module.exports = {
    configureWebpack:{
        resolve:{
            extension :[],
            // alias别名
            alias:{
                'assets':resolve('@/assets'),
                'common':resolve('@/common'),
                'components':resolve('@/components'),
                'network':resolve('@/network'),
                'views':resolve('@/views')
            }
        }
    }
}