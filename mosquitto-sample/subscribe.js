// npm install mqtt
var mqtt = require('mqtt');

// connnect to a open source mqtt broker
var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

// subscribe to a topic "hello/world"
client.subscribe('helloworld', function() {
  client.on('message', function(topic, message) {
    console.log("Received :'" + message + "' on topic: '" + topic + "'");
  });
});

