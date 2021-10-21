const { connect } = require("amqplib");
require('dotenv/config');

(async function sendtoQueue(){
        
        const conn = await connect(process.env.RABBIT_CONNECTION);
        
        const channel = await conn.createChannel();

        channel.assertQueue(process.env.RABBIT_QUEUE_NAME)

        for(let i =0; i<10; i++){       
           
           let message = { message: `m[${i}, ${Math.round(Math.random() * (i+100))}]`, retry: 0 };
           
           channel.sendToQueue(process.env.RABBIT_QUEUE_NAME, Buffer.from(JSON.stringify(message)));

           console.log('Add:', message.message);
           
        }

        return true;

})();
