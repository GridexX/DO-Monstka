require("dotenv").config();

export const KAFKA_URI = process.env.KAFKA_URI ?? "localhost:9092";
export const TOPIC_NAME = process.env.TOPIC_NAME ?? "do";
export const GROUP_ID = process.env.GROUP_ID ?? "do-group";
export const RANDOM_WORD_GENERATOR_API_URL =
    process.env.RANDOM_WORD_GENERATOR_API_URL ??
    "https://random-word-api.herokuapp.com/word?lang=en";
export const HEADER_USERNAME = process.env.HEADER_USERNAME ?? "gridexx";
