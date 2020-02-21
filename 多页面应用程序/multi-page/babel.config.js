module.exports = {
  "presets": [
    "@babel/preset-flow",
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "8.10"
        },
        "corejs": "3", // 声明corejs版本
        "useBuiltIns": "usage"
      }
    ]
  ]
}