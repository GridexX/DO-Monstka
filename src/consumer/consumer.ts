import { type } from "../avro/model/model";
import { GROUP_ID, TOPIC_NAME } from "../config/constant";
import { kafka } from "../config/kafka";
import { sendAvroMessage, sendMessage } from "../producer/producer";
import { getAvroMessage, getWordOrDot } from "../utils/utils";

export const consumesMessages = async () => {
    const consumer = kafka.consumer({ groupId: GROUP_ID });

    await consumer.connect();
    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                level: "INFO",
                message: "Received message",
                topic,
                partition,
                offset: message.offset,
                headers: message.headers?.toString(),
                value: message?.value?.toString(),
            });
            const randomWord = await getWordOrDot();
            sendMessage(TOPIC_NAME, randomWord);
        },
    });
};

export const consumesAvroMessages = async () => {
    const consumer = kafka.consumer({ groupId: GROUP_ID });

    await consumer.connect();
    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (message.value === null) return;
            const value = JSON.stringify(type.fromBuffer(message.value));

            console.log({
                level: "INFO",
                message: "Received message",
                topic,
                partition,
                offset: message.offset,
                headers: message.headers?.toString(),
                value: value,
            });
            const avroMessage = await getAvroMessage();
            sendAvroMessage(TOPIC_NAME, avroMessage);
        },
    });
};
