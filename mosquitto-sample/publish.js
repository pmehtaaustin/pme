var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

client.on('connect', function () {
    client.publish('helloworld', 'Test message published');
});

client.on('message', function (topic, message) {
    // convert message to string, since it is returned as a buffer object
    console.log(message.toString());
    client.end();
});