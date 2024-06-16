const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0', // Allows the server to be accessible externally
    port: 8080,
  },
})
