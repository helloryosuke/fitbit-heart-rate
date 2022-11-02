/*
  fitbitデバイスで動作する。
*/
import * as messaging from "messaging";
import { HeartRateSensor } from "heart-rate";
import { me } from "appbit";
import * as fs from "fs";

// fitbit appとの通信を開始する。
messaging.peerSocket.addEventListener("open", (evt) => {
  start_heartRateSensor();
});

messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});

// fitbit appと接続後に、心拍データの取得を行う。
function start_heartRateSensor(){
  const hrm = new HeartRateSensor({ frequency: 1, batch: 1 });
  hrm.addEventListener("reading", () => {
    sendMessage({
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    });
  });
  hrm.start();
  //なぜか効かない。
  //me.appTimeoutEnabled = false;
}
// fitbit appに心拍データを送信する。
function sendMessage(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}