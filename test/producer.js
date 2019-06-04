'use strict';

const kafka = require('kafka-node');
const HighLevelProducer = kafka.HighLevelProducer;
const client = new kafka.KafkaClient();
const producer = new HighLevelProducer(client);

const messages = [{
    topic: 'platform.inventory.events',
    messages: '{"timestamp": "2019-05-24T18:08:06.510919+00:00", "id": "2d035613-a5c5-4d34-90ed-4f582aefb560", "type": "delete"}'}
];

producer.send(messages, function (err, data) {
    if (err) {
        console.log(err); // eslint-disable-line no-console
    } else {
        console.log('message sent', data); // eslint-disable-line no-console
    }

    producer.close();
});