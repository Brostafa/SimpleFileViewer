const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const TEMP_DIR = path.join(__dirname, 'public')
const PORT = process.env.PORT || 8000

if (!fs.existsSync(TEMP_DIR)) {
	fs.mkdirSync(TEMP_DIR)
}
app.use(express.static(TEMP_DIR))

app.listen(PORT, () => console.log(`Listening on :${PORT}`))
