require("dotenv").config();

export const KAFKA_URI = process.env.KAFKA_URI ?? "162.38.112.138:9092";
export const TOPIC_NAME = process.env.TOPIC_NAME ?? "do-avro";
export const GROUP_ID = process.env.GROUP_ID ?? "do-group";
export const RANDOM_WORD_GENERATOR_API_URL =
    process.env.RANDOM_WORD_GENERATOR_API_URL ??
    "https://random-word-api.herokuapp.com/word?lang=en";
export const HEADER_USERNAME = process.env.HEADER_USERNAME ?? "gridexx";
export const KAFKA_REGISTRY_URL =
    process.env.KAFKA_REGISTRY_URL ?? "http://162.38.112.138:8081/";
export const AVRO_SUBJECT = process.env.AVRO_SUBJECT ?? "do.polytech.Message";
