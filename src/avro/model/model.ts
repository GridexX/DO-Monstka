import { RawAvroSchema } from "@kafkajs/confluent-schema-registry/dist/@types";
import { Type } from "avsc";

export const schema: RawAvroSchema = {
    type: "record",
    name: "Message",
    namespace: "do.polytech",
    fields: [
        { name: "message", type: "string" },
        { name: "country", type: "string" },
        { name: "city", type: "string" },
        { name: "temperature", type: "double" },
        { name: "random", type: "double" },
        { name: "lat", type: "double" },
        { name: "long", type: "double" },
    ],
};

export type JSONSchema = {
    message: string;
    country: string;
    city: string;
    temperature: number;
    random: number;
    lat: number;
    long: number;
};

export const type = Type.forSchema(schema);
