import amqp from 'amqplib';
import { rabbitConnectionString } from './rabbitConfig'

const connectChannel = async (queue) => {
  connection = await amqp.connect(rabbitConnectionString)
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