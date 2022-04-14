module.exports = {
    development: {
        express: {
            port: 3000
        },
        mongodb: {
            host:'mongodb://localhost:27017/tpmongodb'
        }
    },
    production: {
        express: {
            port: 3000
        },
        mongodb: {
            host:'mongodb://localhost:27017/tpmongodb'
        }
    }
}