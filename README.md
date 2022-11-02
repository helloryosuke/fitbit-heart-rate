# Download Real-Time Heart Rate Data Using Fitbit Companion API and Websocket Server

This demo application utilizes Fitbit and its available APIs to send its real-time heart-rate data to a websocket server, which writes the data to a local csv file. Check [here](https://dev.fitbit.com/build/guides/companion/) and [here](https://dev.fitbit.com/getting-started/) for more information regarding Fitbit API and SDK.

Since the Fitbit cannot directly access the internet for the server to receive the data directly, it must be paired with the mobile application which will connect with a websocket server to send the data.

## Prerequities
- Node.js 8.x+ on macOS, Windows or Linux
- Fitbit user account. You can sign up [here](https://www.fitbit.com/signup)
- Fitbit OS device
- Latest Fitbit mobile application for Andriod, iOS or Windows Phone, paired with your Fitbit device
- Fitbit CLI see [here](https://dev.fitbit.com/build/guides/command-line-interface/) for more information

## Get started

### Frontend
1. Access the `bpm_monitor` folder in the frontend directory on the terminal
2. Run the three commands below
```sh
npm add --dev @fitbit/sdk
npm add --dev @fitbit/sdk-cli
npx fitbit-build generate-appid
npx fitbit-build
```

### Backend
1. Access the `monitor_websocket` folder in the backend directory on the terminal
2. Run `npm install`
3. Run `node server.js`

You should see a message "Launched Websocket server" on the terminal if the server launches successfully.