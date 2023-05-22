import { GROUP_ID, TOPIC_NAME } from "../config/constant";
import { kafka } from "../config/kafka";
import { sendMessage } from "../producer/producer";
import { getWordOrDot } from "../utils/utils";

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
