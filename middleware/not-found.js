const notFoundMiddleware=(req,res)=>
res.status(404).send('route not exist')

export default notFoundMiddleware