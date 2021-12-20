import amqp from 'amqplib';

const RABBIT_URL = 'amqp://localhost'

const connectChannel = async (queue) => {
  connection = await amqp.connect(RABBIT_URL)
  const ch = await connection.createChannel()
  const isQueueAssert = await ch.assertQueue(queue, { durable: true })

  if(!isQueueAssert)
    throw Error('Can\'t assert queue')
  
  return ch
}

const sendToQueue = async (queue, msg) => {
  return channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg), { persistent: true }))
}

export {
  connectChannel,
  sendToQueue
}