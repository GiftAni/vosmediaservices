const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://unityekeoba18:Devroyale2005@cluster0.0tjsbja.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}