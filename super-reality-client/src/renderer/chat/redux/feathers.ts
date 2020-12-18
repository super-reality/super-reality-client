/* eslint-disable import/no-unresolved */
import io from "socket.io-client";
/* eslint-disable import/no-unresolved */
import feathers from "@feathersjs/client";

// const { publicRuntimeConfig } = getConfig()
// const apiServer =
//   process.env.NODE_ENV === 'production'
//     ? publicRuntimeConfig.apiServer
//     : 'http://3.101.18.208:3030'

const apiServer = "http://3.101.18.208:3030";

// publicRuntimeConfig.featherStoreKey

const featherStoreKey = "XREngine-Auth-Store";

// Socket.io is exposed as the `io` global.
const socket = io(apiServer, {
  transports: ["websocket"],
  upgrade: false,
});

// @feathersjs/client is exposed as the `feathers` global.
const client = feathers();

client.configure(feathers.socketio(socket, { timeout: 10000 }));
client.configure(
  feathers.authentication({
    storageKey: featherStoreKey,
  })
);
export default client;
// "TheOverlay-Auth-Store"
