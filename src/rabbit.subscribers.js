const { connect } = require("amqplib");
require('dotenv/config');


(async function consume(){
        
    const conn = await connect(process.env.RABBIT_CONNECTION);
    
    const channel = await conn.createChannel();

    channel.consume(process.env.RABBIT_QUEUE_NAME, (message)=>{
        
        console.log('r1', message.content.toString());

        let time = Math.trunc(Math.random() * 30000);

        setTimeout( () => {
            channel.ack(message); 
            console.log(`rabbit1 ${message.content.toString()} depois de ${time/1000}s`);
        }, time);
        
    })

})();

(async function consume(){
        
    const conn = await connect(process.env.RABBIT_CONNECTION);
    
    const channel = await conn.createChannel();

    channel.consume(process.env.RABBIT_QUEUE_NAME, (message)=>{
        
        console.log('r2', message.content.toString());

        let time = Math.trunc(Math.random() * 30000);

        setTimeout( () => {
            channel.ack(message); 
            console.log(`rabbit2 ${message.content.toString()} depois de ${time/1000}s`);
        }, time);
        
    })

})();

(async function consume(){
        
    const conn = await connect(process.env.RABBIT_CONNECTION);
    
    const channel = await conn.createChannel();

    channel.consume(process.env.RABBIT_QUEUE_NAME, (message)=>{
        
        console.log('r3', message.content.toString());

        let time = Math.trunc(Math.random() * 60000);

        setTimeout( () => {
            channel.ack(message); 
            console.log(`rabbit3 ${message.content.toString()} depois de ${time/1000}s`);
        }, time);
        
    })

})();

(async function consume(){
        
    const conn = await connect(process.env.RABBIT_CONNECTION);
    
    const channel = await conn.createChannel();

    channel.consume(process.env.RABBIT_QUEUE_NAME, (message)=>{
        
        console.log('r4', message.content.toString());
        
        let time = Math.trunc(Math.random() * 50000);

        setTimeout( () => {
            channel.ack(message); 
            console.log(`rabbit4 ${message.content} depois de ${time/1000}s`);
        }, time);
        
    })

})();


/*
(async function consume(){
        
        const conn = await connect("amqp://123456:admin@localhost:5672");
        
        const channel = await conn.createChannel();
    
        channel.consume('the-fifo', (message)=>{
            
            let time = 0
            let error = true; // simulando um erro no processamento dos dados
            
            setTimeout( () => {
               
                channel.ack(message); 
                console.log(`rabbit1 ${message.content.toString()} depois de ${time/1000}s`);
                
                if(error){
                       
                    message = JSON.parse(message.content.toString());
                    
                    //se teve erro, agora verifica se já tentou de novo
                    if(message.retry === 0){
                        message.retry = 1
                        channel.sendToQueue('the-fifo', Buffer.from(JSON.stringify(message)));
                    } else {
                        console.log(`rabbit1: The message ${message.message} won't reprocessed 
                        because it has already been processed twice in an attempt to revert the error.`)
                    }

                }

            }, time);

        })

})();
*/