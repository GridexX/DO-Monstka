import { kafka } from "../config/kafka";
import { HEADER_USERNAME } from "../config/constant";
import { getSchemaID } from "../avro/avro";
import { JSONSchema, type } from "../avro/model/model";
import { Type } from "avsc/types";

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

export const sendAvroMessage = async (
    topicName: string,
    message: JSONSchema
) => {
    const schemaId = await getSchemaID();

    const headers = {
        username: HEADER_USERNAME,
        schema_id: schemaId.toString(),
    };

    const avroMessage = type.toBuffer(message);

    await producer.connect();
    await producer.send({
        topic: topicName,
        messages: [
            {
                headers: headers,
                value: avroMessage,
            },
        ],
    });

    console.log({
        level: "INFO",
        message: "Send Avro message",
        topic: topicName,
        headers: headers,
        value: message,
        schemaId: schemaId.toString(),
    });
};
