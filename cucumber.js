{
    "default": {
      "require": [
        "src/steps/**/*.ts"
      ],
      "publishQuiet": true,
      "format": [
        "progress",
        "json:reports/cucumber-report.json"
      ],
      "requireModule": [
        "ts-node/register"
      ],
      "paths": [
        "src/features/**/*.feature"
      ]
    }
  }
  