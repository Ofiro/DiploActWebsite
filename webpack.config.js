import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import fs from 'fs';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'; // Uncomment if you want to analyze the bundle

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin loader
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin loader
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // Use a consistent filename
    path: path.resolve(process.cwd(), 'public'),
    clean: true,
  },
  optimization: {
    splitChunks: false, // Disable chunk splitting
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(), // Add CSS minimizer
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Use a consistent filename
    }),
    new CompressionWebpackPlugin(), // Add compression plugin
    // new BundleAnalyzerPlugin(), // Uncomment if you want to analyze the bundle
  ],
  devtool: 'source-map', // Add source maps for production
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    server: {
      type: 'http',
    },
    allowedHosts: 'all',
  },
};