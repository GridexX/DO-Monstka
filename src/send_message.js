const { Kafka } = require("kafkajs");

const KAFKA_URI = "localhost:9092";
const kafkaConfig = { brokers: [KAFKA_URI] };
const kafka = new Kafka(kafkaConfig);
const producer = kafka.producer();

const sendMessage = async (message) => {
  try {
    await producer.connect();
    await producer.send({
      topic: "do",
      messages: [{ value: message, headers: { username: "gridexx" } }],
    });
    console.log("Message sent successfully.");
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    await producer.disconnect();
  }
};

// Get the message from command line argument
const message = process.argv[2];
if (!message) {
  console.error("Please provide a message as a command line argument.");
  process.exit(1);
}

sendMessage(message);