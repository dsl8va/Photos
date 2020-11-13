module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.6.3', // version of MongoDB
      skipMD5: true
    },
    autoStart: false
  }
}