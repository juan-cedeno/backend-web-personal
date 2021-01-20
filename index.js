require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectDatabase } = require('./database/config')



const app = express()
app.use(cors())
connectDatabase()


app.use( express.json() )

app.use('/api/', require('./routers/tool'))
app.use('/api/', require('./routers/proyect'))

app.listen(process.env.PORT, () => {

    console.log(process.env.PORT);

})