import { PetsItem } from "../PetsItem/PetsItem"
import { List } from "./PetsList.styled"
 
const pets = [
    {
        id:"werwersfdsdfsdf",
        name: "Jack",
        birth: "22.04.2018",
        breed: "Persian cat",
        comments: "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat."
    },
    {
        id: "zxczxczcxasasdf",
        name: "Jack",
        birth: "22.04.2018",
        breed: "Persian dog",
        comments: "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life."
    }
]

export const PetsList = () => {
    return (
        <List>
            {pets.map(pet =><PetsItem key={pet.id} info={pet} />)}
        </List>
    )
}