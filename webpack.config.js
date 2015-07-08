var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'react-splitter.jsx'),
    output: {
        libraryTarget: 'umd',
        library: 'Splitter',
        path: path.join(__dirname, 'dist'),
        filename: 'react-splitter.js'
    },
    externals: [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'src')],
            }
        ]
    }
};
