import axios from "axios";
import { RANDOM_WORD_GENERATOR_API_URL } from "../config/constant";
import { JSONSchema } from "../avro/model/model";

export const generateRandomWord = async (): Promise<string> => {
    const content = await axios
        .get(RANDOM_WORD_GENERATOR_API_URL)
        .then((res: { data: [""] }) => {
            return res.data[0];
        });
    return content;
};

export const getWordOrDot = async (): Promise<string> => {
    let log = {
        level: "INFO",
        message: "Generate the end of the sentence",
        value: "Arsène",
    };

    if (Math.random() < 0.5) {
        console.log(log);
        return await "Arsène.";
    }

    log.value = await generateRandomWord();
    log.message = "Generate a random word";

    console.log(log);
    return log.value;
};

export const getRandomFrenchCityName = async (): Promise<string> => {
    const city = ["Montpellier", "Marseille", "Strasbourg", "Lyon", "Toulouse"];

    const random = Math.floor(Math.random() * city.length);
    const randomCity = city[random];

    let log = {
        level: "INFO",
        message: "Generate a random city",
        value: randomCity,
    };
    return await randomCity;
};

export const getRandomCoordinate = () => Math.floor(Math.random() * 360) - 180;

export const getRandomMagicNumber = (): number => {
    const numbers = [6, 36, 69, 42];

    const random = Math.floor(Math.random() * numbers.length);
    return numbers[random];
};

export const getRandomTemperature = () => Math.floor(Math.random() * 100) - 50;

export const getAvroMessage = async (): Promise<JSONSchema> => {
    const randomFrenchCityName = await getRandomFrenchCityName();
    const randomWordOrDot = await getWordOrDot();

    const avroMessage: JSONSchema = {
        message: randomWordOrDot,
        country: "France",
        city: randomFrenchCityName,
        temperature: getRandomTemperature(),
        random: getRandomMagicNumber(),
        lat: getRandomCoordinate(),
        long: getRandomCoordinate(),
    };

    return avroMessage;
};
