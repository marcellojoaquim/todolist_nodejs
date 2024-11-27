const express = require('express');
const cluster = require('cluster');
const numCPUs = require('node:os').availableParallelism();
const router = require('./router');
const PORT = process.env.PORT || 3333;
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(router);

if (cluster.isMaster) {
  console.log('Modo cluster');
  console.log('-- Master thread ' + process.pid);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('listening', worker => {
    console.log(
      '---- Nova Slave Thread conectada ao Cluster sob o PID: %d ',
      worker.process.pid
    );
  });
  cluster.on('exit', (worker) => {
    console.log(
      '-- Slave Thread sob o PID %d desconectada do Cluster. Forçando abertura...',
      worker.process.pid
    );
    cluster.fork();
  });
  startWebService();
}

function startWebService(){
  app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`);});
}
