const app = require('./app')

const port = 80 // || 3000
app.listen(port, () => console.log(`API server started on ${port}`))
