import { WebSocketServer } from 'ws';
import fs from 'fs';

// create websocket object and listen on port 443
const wss = new WebSocketServer({ port: 443 });

// log that server has initiated
console.log("Launched Websocket server");

wss.on('connection', function connection(ws) {

  // on message received, log the data to data.csv
  ws.on('message', function message(data) {

    // get current time : change timezone as needed
    const now = (new Date()).toLocaleString({ timeZone: 'Asia/Tokyo' });

    // log data on console
    console.log('%s: %s', now, data);

    // write to csv file
    fs.appendFileSync("data.csv", `${now},${data}\n`);
    
  });
  
});