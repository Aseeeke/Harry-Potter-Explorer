import axios from "axios";

const url = "https://hp-api.onrender.com/api/characters"

export type Character = {
    id: number;
    name: string;
    image: string;
    house: string;
    patronus: string;
}

export const searchAll = async () => {
    const result = await axios.get(url);
    return result.data;
}