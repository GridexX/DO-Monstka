import { SchemaRegistry } from "@kafkajs/confluent-schema-registry";
import { AVRO_SUBJECT, KAFKA_REGISTRY_URL } from "../config/constant";
import { schema } from "./model/model";

const registry = new SchemaRegistry({ host: KAFKA_REGISTRY_URL });

export const getSchemaID = async (): Promise<number> => {
    return await registry.getRegistryIdBySchema(AVRO_SUBJECT, schema);
};
