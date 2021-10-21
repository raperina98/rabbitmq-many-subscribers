# rabbitmq-many-subscribers
Apenas brincando com o RabbitMQ 🐰 testando vários subscribers/consumers ouvindo uma fila.

![alt text](https://github.com/raperina98/rabbitmq-many-subscribers/blob/develop/docs/img.docs.logger.png?raw=true)

# RUN CODE 

- instalar dependencias 
    ```
    $ npm i
    ```  
- executar em sequência (de preferêcia, cada um em um terminal): 
    ```
    $ yarn docker:rabbitmq
    $ yarn subscribers
    $ yarn publisher
    ```
- tem apenas duas variaveis de ambiente do rabbitmq 
  - `RABBIT_CONNECTION`: conexão com o rabbitMQ
  - `RABBIT_QUEUE_NAME`: nome da fila que será testada 
- Observação: é preciso ter o docker & docker-compose instalados e configurados na máquina ou alguma instancia do rabbitMQ rodando localmente