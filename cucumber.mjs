export default {
    default: {
      require: ["src/steps/**/*.ts"],
      requireModule: ["ts-node/register"], 
      format: ["progress", "json:reports/cucumber-report.json"],
      publishQuiet: true,
      paths: ["src/features/**/*.feature"],
    },
  };