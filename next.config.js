const withImage  = require('next-images')
module.exports = withImage({
    webpack(config){
        return config
    }
})
/*
module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[contenthash].[ext]',
                        outputPath: 'static',
                        publicPath: '_next/static'
                    }
                },

            ],
        })

        return config
    },
}*/
