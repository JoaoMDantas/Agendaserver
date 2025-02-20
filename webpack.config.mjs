import path from 'path';


export default {
    mode:'development',
    entry:'./frontend/index.js',
    output: {
        path: path.resolve('./','public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
           exclude: /node_modules/ ,
           test: /\.js$/,
           use:{
            loader: 'babel-loader',
            options:{
                presets:['@babel/env']
            }
           }
        },{
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        }]
    },
    devtool:'source-map'
};