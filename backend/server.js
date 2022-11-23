const app = require('./app')
require('./config/db.js').connect()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})