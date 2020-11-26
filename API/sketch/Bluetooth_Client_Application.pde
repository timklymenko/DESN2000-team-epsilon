import processing.serial.*;
import processing.net.*;

Serial myPort;
Server myServer; 
int dataIn;

void setup(){
  println("Starting up...");
  myPort = new Serial(this, "/dev/cu.HC-05-SerialPort", 9600);
  myPort.bufferUntil('\n'); 
  myServer = new Server(this,5204);
}
void serialEvent (Serial myPort){ 
  String data = myPort.readStringUntil('\n');
  print("New reading: " + data);
  myServer.write(data);
}

void draw(){ 
  delay(1500);
}
