import { heroe } from "../interfaces/interfaces"

interface CharacterByHereoProps {
    alterEgo: string,
    characters: string
}

export const CharactersByHeroe = ({ alterEgo, characters }: CharacterByHereoProps) => {
    if (alterEgo === characters) return (<></>);
    return (<p>{characters}</p>);
}
