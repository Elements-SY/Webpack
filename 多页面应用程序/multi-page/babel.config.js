module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "modules": false,
      "useBuiltIns": "entry", // useBuiltIns 提供 false, entry, usage 三种方式
      "corejs": 3,
      "targets": {
        "browsers": [ "ie >= 8", "chrome >= 62" ]
      }
    }]
  ],
  "plugins": [
    [ 
      "@babel/plugin-transform-runtime", {
        "corejs": 3
      }
    ]
  ]    
}