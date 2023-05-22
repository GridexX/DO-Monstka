import { Kafka, KafkaConfig } from "kafkajs";
import { KAFKA_URI } from "./constant";

const kafkaConfig: KafkaConfig = { brokers: [KAFKA_URI] };
export const kafka = new Kafka(kafkaConfig);
