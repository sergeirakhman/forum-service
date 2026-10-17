const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGODB_URI || 'mongodb://sergei:1234@localhost:27017/?authSource=admin',
        db: {
            dbName: process.env.MONGODB_NAME || 'fullstack3464',
        }
    }
}

export default config;