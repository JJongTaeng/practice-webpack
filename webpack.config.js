const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        // C:\Users\intae\Desktop\sample\dist
        path: path.resolve('./dist'),
        // entry 오브젝트 안에 설정된 main 이 name 으로 할당됨
        // 이유 : entry가 여러개이면 output을 동적으로 만들어내기 위해서
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                //엔트리 파일부터 연결된 모든 파일을 돌면서 test에 설정된 파일을 use에 적용된다.
                test: /\.css$/, // .js 끝나는 모든 파일에 대해서
                use: [
                    // path.resolve('./my-webpack-loader.js') // 이파일을 거쳐서 실행된다.
                    // 실행 순서는 뒤에서 부터 앞으로 실행된다.
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options:{
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                    limit: 20000, // 20kb
                }
            }
        ]
    },
    plugins: [
        new MyWebpackPlugin(),
    ]
}