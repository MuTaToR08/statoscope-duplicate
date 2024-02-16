const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

module.exports = {
  output: {
    uniqueName: "angularShell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "webLib",
      shared: {
        '@angular/common': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/core': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/platform-browser': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/platform-browser-dynamic': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/router': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/cdk/a11y': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        '@angular/animations': {
          requiredVersion: "17.2.1",
          singleton: true,
          eager: true,
          strictVersion: true
        },
        'rxjs': {
          requiredVersion: "7.8.0",
          singleton: true,
          eager: true,
          strictVersion: true
        },
      }
    }),
    new StatoscopeWebpackPlugin({
      saveReportTo: 'dist/statoscope/report.html',
      saveStatsTo: 'dist/statoscope/stats.json',
      normalizeStats: false,
      saveOnlyStats: false,
      disableReportCompression: false,
      watchMode: false,
      open: false,
      compressor: 'gzip',
    })

  ],
};
