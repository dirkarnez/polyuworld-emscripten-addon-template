import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.d.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|glb|ogg|mp3|mp4|wav|woff2|webm|3dl|cube)$/,
        type: 'asset/inline'
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/cpp/cmake-build/emscripten/polyuworld-emscripten-addon-template.wasm",
          to: "polyuworld-emscripten-addon-template.wasm"
        }
      ]
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        three$: path.resolve(__dirname, "./node_modules/three/build/three.module.js"),
        bitecs$: path.resolve(__dirname, "./node_modules/bitecs/dist/index.mjs")
    }
  },
  output: {
    filename: 'index.mjs',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name]-[hash][ext][query]',
    module: true, // Enable ES module output
  },
  devtool: 'source-map',
  experiments: {
    outputModule: true, // Enable output module experiments
  },
  externals: {
    bitecs: 'bitecs',
    three: 'three',
    hubs: 'hubs'
  }
};