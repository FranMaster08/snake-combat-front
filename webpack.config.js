const path = require('path');

module.exports = {
  entry: './src/ui/src/main.ts',  // Ruta de tu archivo principal TypeScript
  output: {
    filename: 'bundle.js',  // Nombre del archivo consolidado
    path: path.resolve(__dirname, 'dist/ui'),  // Carpeta de salida
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Extensiones que Webpack debe manejar
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
