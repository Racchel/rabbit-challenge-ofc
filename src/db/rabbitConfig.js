module.exports = {
  rabbitConnectionString: 'amqp://localhost',

  rabbitQueue: "beneficiary.queue",
  rabbitExchange: "beneficiary.exchange",
  rabbitRoutingKey: "beneficiary",

  rabbitDeadLetterQueue: "beneficiary-dead-letter.queue",
  rabbitDeadLetterExchange: "beneficiary-dead-letter.exchange",
  rabbitDeadLetterRoutingKey: "beneficiary-dead-letter"
}