const path = require('path');

module.exports = {
    entry: './test/index.ts',
    devtool: 'inline-source-map',
    mode: "development",
    resolveLoader: {
        modules: ["node_modules", path.resolve(__dirname, "loaders")]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ok-translate-loader-ts',
                exclude: /node_modules|framework|docs/,
                options: {
                    outdir: path.resolve(__dirname, "translators")
                }
            },
            {
                test: /\.html$/,
                loader: 'ok-translate-loader-html',
                exclude: /node_modules|framework|docs/,
                options: {
                    outdir: path.resolve(__dirname, "translators")
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.html', '.ts', '.js', '.sass', '.scss', '.css'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'test'),
    },
};