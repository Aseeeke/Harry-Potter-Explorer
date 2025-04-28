import React, {useEffect, useState} from "react";
import {Character, searchAll} from "@/shared/api.ts";


export const CharactersPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);
    const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setSelectedCharacters(allCharacters.filter(character => character.name.toLowerCase().includes( e.target.value.toLowerCase())));
    }

    useEffect(() => {
        async function fetchCharacters() {
            const res: Character[] = await searchAll();
            setAllCharacters(res);
            setSelectedCharacters(res);
        }
        fetchCharacters();
    }, []);

    return (
        <div className="text-white">
            <div className="flex items-center justify-center mt-4 mb-4 text-3xl">
                <input type="text" placeholder="name..." onChange={handleChange} value={searchValue} className="outline-none border rounded-lg pl-2"/>
            </div>
            <div className="grid gap-4
             grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                {selectedCharacters ? selectedCharacters.map(character => (
                    <div className="flex flex-col items-center h-[500px] text-xl ">
                        {character.image ? <img src={character.image} alt="image" className="h-[350px]" loading="lazy"/> : <img src="/assets/no_image.png" loading="lazy" alt="no image"/>}
                        <h1 className="font-bold">{character.name}</h1>
                        <h1 className="font-semibold">{character.house}</h1>
                        <h1 className="italic text-lg">{character.patronus}</h1>
                    </div>
                )) : null}
            </div>
        </div>
    )
}

export default CharactersPage