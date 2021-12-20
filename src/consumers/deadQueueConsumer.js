import amqp from 'amqplib/callback_api'
import { 
	rabbitQueue,
	rabbitExchange,
	rabbitRoutingKey,
	rabbitDeadLetterQueue,
	rabbitDeadLetterExchange,
	rabbitDeadLetterRoutingKey
} from '../db/rabbitConfig'

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        // define dead queue
        let queueDeadLetterOptions = {
          durable: true,
          arguments : {
            'x-dead-letter-exchange': rabbitExchange,
            'x-dead-letter-routing-key': rabbitRoutingKey,
            'x-queue-type': 'classic',
            'x-message-ttl': 15000
          }
        };
        channel.assertExchange(rabbitDeadLetterExchange, 'direct', { durable: false });
        channel.assertQueue(rabbitQueue, queueDeadLetterOptions, (error, ok) => {
					if (ok)
						ch.bindQueue(rabbitDeadLetterQueue, rabbitDeadLetterExchange, rabbitDeadLetterRoutingKey)
        });
        
        // define queue
        channel.assertQueue(rabbitQueue, queueDeadLetterOptions);
 
        channel.prefetch(1)
        channel.consume(queue, function(msg) {
            console.log(' [x] Received %s', JSON.parse(msg.content.toString()));
            if (!msg.properties.headers['x-death']){
                console.log('try process message...');
                ch.nack(msg, false, false);
            }
            else{
                let counter = msg.properties.headers['x-death'][0].count;
                console.log(`[${counter}] try process message...`);
                if (counter == 4){
                    console.log('retry limit reached...');
                    ch.ack(msg);
                }
                else{
                    ch.nack(msg, false, false);
                }
            }
        }, {
            noAck: true,
        });
    });
});
