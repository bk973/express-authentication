/**app index... */
const app = require('./src');
const port = 3300 || process.env.PORT;
app.listen(port, function(){
    console.log('app running at port:'+port)
})