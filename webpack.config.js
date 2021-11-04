const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
            {
                test:/.s[ca]ss$/,
                use:[{
                    loader:'sass-loader'
                }]
            },{
                test:/\.jsx?/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
