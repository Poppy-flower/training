module.exports = {
    plugins: ['antd'],
    config: {
        exports: [
            ['babel-polyfill', './scripts/index.js'],
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            baseConfig.module.loaders.push({
                test:/(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query:
                    {
                        presets:["env", "react"],
                        plugins: [
                            [  "import",{libraryName: "antd", style: 'css'}] // antd按需加载css
                        ]
                    }
            });

            return baseConfig;
        }
    }
};
