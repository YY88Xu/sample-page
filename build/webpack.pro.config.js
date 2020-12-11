const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'samplePage.js',
        libraryTarget: 'umd',
        library: 'SamplePage'
    },
    // externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ]
}