const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health-dex', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
