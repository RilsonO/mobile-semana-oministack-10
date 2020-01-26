import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.102:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFuction) {
  socket.on('new-dev', subscribeFuction);
}


function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }

  socket.connect();
}

function disconnect() {
  socket.disconnect();
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};