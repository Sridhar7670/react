const path = require("path"); // Node.js built-in module to handle file paths

module.exports = {
    // Entry point - the first file Webpack will look at to start bundling
    entry: "./src/index.js",

    // Output configuration - where the bundled file will be saved
    output: {
        filename: "bundle.js",  // Name of the output bundle file
        path: path.resolve(__dirname, 'public')  // Absolute path to the output directory (public folder)
    },

    // Mode tells Webpack to optimize the build accordingly
    // 'development' = readable output, no minification, fast rebuilds
    mode: 'development',

    // Webpack Dev Server settings - for running a local development server
    devServer: {
        // This tells webpack-dev-server where to serve static files from.
        // In this case, it's the 'public' directory at the root of your project.
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
    
        // The port where the dev server will run.
        // So your app will be available at http://localhost:3000
        port: 3000
    },    

    // Loaders - tell Webpack how to handle different file types
    module: {
        rules: [
            {
                test: /\.js$/,  // Apply this rule to all .js files
                exclude: /node_modules/,  // Exclude node_modules folder from processing
                use: {
                    loader: "babel-loader"  // Use Babel loader to transpile modern JS to older JS for browser compatibility
                }
            }
        ]
    }
}
