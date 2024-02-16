module.exports = {
  validate: {
    plugins: ['@statoscope/webpack'],
    rules: {
      '@statoscope/webpack/no-packages-dups': ["error"]
    }
  },
  settings: {
    saveReportTo: './dist/statoscope/report.html',
    saveStatsTo: './dist/statoscope/stats.json',
  }
};
