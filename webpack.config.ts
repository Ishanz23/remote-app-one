import { Configuration, container } from 'webpack';

export const webpackConfig: Configuration = {
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'RemoteAppOne',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
export default webpackConfig;
