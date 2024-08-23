export default {
    default: {
      require: ["src/steps/**/*.ts"],
      requireModule: ["ts-node/register"], 
      // format: ["progress", "json:reports/cucumber-report.json"],
      publishQuiet: false,
      format: ["progress", "@cucumber/pretty-formatter"],
      paths: ["src/features/**/*.feature"],
      import: ["src/features/**/*.feature"],
    },
  };