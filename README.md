# DESN2000-team-epsilon

The UI consists of four applications to pass the data from the hardware to the UI WebApp.
These are Arduino_sketch -> Bluetooth_Client_Application.pde -> API -> UI WebApp

The Arduino sketch is embedded on the on the project Arduino and automaticlly connects to the Bluetooth_Client_Application.

To run the other app you will need to install a few dependencies listed here:
- https://nodejs.org/en/download/
And run the following installation commands from any terminal window
- npm install express --save
- npm install webpack-dev-server --save-dev

To run the Bluetooth_Client_Application, from run terminal run the command: "./processing-java --sketch=`pwd`/API/sketch/Bluetooth_Client_Application.pde --force --run"

To run the API, from run terminal run the command: "node API/Index.js"

To run the UI WebApp, from run terminal run the command: "yarn dev"
