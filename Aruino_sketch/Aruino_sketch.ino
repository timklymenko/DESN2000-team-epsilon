//#define ledPin 7

// A0 is V out from csa
// A1 is Input voltage
// A2 is negative input voltage

int analogPin0 = A0;
int analogPin1 = A1;
int analogPin2 = A2;
String uniqueID = "1";
void setup() {
  Serial.begin(9600); // Default communication rate of the Bluetooth module
}
void loop() {
  delay(500);
  int sensorValue0 = analogRead(analogPin0);
  float Iout = sensorValue0 * (5.0/1023.0);

  int sensorValue1 = analogRead(analogPin1);
  float numericValue1 = sensorValue1 * (5.0/1023.0);
  int sensorValue2 = analogRead(analogPin2);
  float numericValue2 = sensorValue2 * (5.0/1023.0);
  float Vout = numericValue1 - numericValue2;
  
  String data = "";
  data += uniqueID;
  data += "-";
  data += Iout;
  data += ",";
  data += Vout;
  Serial.println(data);
}
