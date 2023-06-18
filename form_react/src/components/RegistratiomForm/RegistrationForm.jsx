import React, { useState } from "react";
import FullNameField from "../FullNameField/FullNameField";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import { v4 as uuidv4 } from 'uuid';

const RegistrationForm = ({ handleAddUser }) => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuidv4(),
            fullName,
            email,
            password
        };

        handleAddUser(newUser);

        setFullName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <FullNameField value={fullName} onChange={setFullName} />
                    <EmailField value={email} onChange={setEmail} />
                    <PasswordField value={password} onChange={setPassword} />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm;