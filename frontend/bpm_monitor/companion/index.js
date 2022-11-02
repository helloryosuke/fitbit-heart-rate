/*
  スマートフォンのfitbit app内で動作する。
*/
import * as messaging from "messaging";

// websocketの接続先
const wsUri = "ws://localhost:8080";
const websocket = new WebSocket(wsUri);

// それぞれのリスナを設定する。
websocket.addEventListener("open", onOpen);
websocket.addEventListener("close", onClose);
websocket.addEventListener("message", onMessage);
websocket.addEventListener("error", onError);

function onOpen(evt) {
  console.log("CONNECTED");
  //websocket.send("connected");
}
function onClose(evt) {
  console.log("DISCONNECTED");
}
function onMessage(evt) {
  console.log(`from websocket server: ${evt.data}`);
}
function onError(evt) {
  console.error(`ERROR: ${evt.data}`);
}

// デバイスからのデータを受信したときに、同データをwebsocketサーバに送信する。
messaging.peerSocket.addEventListener("message", (evt) => {
  if(websocket.readyState===WebSocket.OPEN) {
    const data = evt.data["heartRate"];
    websocket.send(data);
    console.log(data);
  }
});