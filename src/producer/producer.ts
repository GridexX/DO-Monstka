import { kafka } from "../config/kafka";
import { HEADER_USERNAME } from "../config/constant";

const producer = kafka.producer();

export const sendMessage = async (topicName: string, message: string) => {
    const headers = {
        username: HEADER_USERNAME,
    };
    await producer.connect();
    await producer.send({
        topic: topicName,
        messages: [
            {
                headers: headers,
                value: message,
            },
        ],
    });
    console.log({
        level: "INFO",
        message: "Send message",
        topic: topicName,
        headers: headers,
        value: message,
    });
};
