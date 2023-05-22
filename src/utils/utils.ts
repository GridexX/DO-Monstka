import axios from "axios";
import { RANDOM_WORD_GENERATOR_API_URL } from "../config/constant";

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
