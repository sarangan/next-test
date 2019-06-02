const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then( ()=>{
    const server = express();

    server.get('/p/:id/title/:title', (req, res)=>{
        const actualPage = '/post';
        const queryParams = {title: req.params.title, id: req.params.id}
        app.render(req, res, actualPage, queryParams)
    });

    server.get('*', (req, res)=>{
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log('> Ready on http://localhost:300');
    });
})
.catch(ex =>{
    console.error(ex.stack);
    process.exit(1);
});

// "start": "NODE_ENV=production node server.js -p $PORT"