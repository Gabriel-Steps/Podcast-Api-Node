import * as http from 'http';
import { app } from './app';

const port = process.env.PORT

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`O servidor foi iniciado na porta ${port}`);
})