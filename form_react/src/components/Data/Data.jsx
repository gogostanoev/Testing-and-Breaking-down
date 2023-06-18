import {v4 as uuidv4} from 'uuid';

export const data = () => {
    [
        {
            id: uuidv4(),
            fullName: "John Doe",
            email: "johndoe@gmail.com",
            password: "johndoe123"
        },
        {
            id: uuidv4(),
            fullName: "Bob Bobski",
            email: "bobbobski@gmail.com",
            password: "bobbobski123"
        },
        {
            id: uuidv4(),
            fullName: "Fred Strong",
            email: "fredstrong@gmail.com",
            password: "fredstrong123"
        }
    ]
}