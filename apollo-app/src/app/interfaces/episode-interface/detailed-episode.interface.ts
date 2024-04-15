import { Character } from "../character-interface/characters-interface";

export interface DetailedEpisode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: Character
}