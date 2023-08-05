
const path = require("path");

module.exports={
    mode: "development", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            }
        ]
    }
}