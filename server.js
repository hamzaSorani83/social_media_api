const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})