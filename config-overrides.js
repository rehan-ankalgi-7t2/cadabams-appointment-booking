// const webpack = require('webpack');

// module.exports = function override(config, env) {
//     // New config, e.g. config.plugins.push...
//     return {
//       ...config,
//       resolve: {
//         ...config.resolve,
//         fallback: {
//           ...config.resolve.fallback,
//           buffer: require.resolve('buffer'),
//           crypto: require.resolve('crypto-browserify'),
//           stream: require.resolve('stream-browserify'),
//         },
//       },
//       plugins: [...config.plugins, new webpack.ProvidePlugin({
//         process: "process/browser",
//         Buffer: ["buffer", "Buffer"],
//     }),]
//     };
//   };

const webpack = require("webpack")

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        
    ]
    // console.log(config.resolve)
    // console.log(config.plugins)

    return config
}