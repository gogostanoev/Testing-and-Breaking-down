import React from 'react';
import { data } from '../Data/Data';

const UsersRegistered = () => {
    const handleRemoveUsers = () => {
        data.length = 0;
    };

    return (
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <span>{user.fullName}</span> - <span>{user.email}</span> -{' '}
                    <span>{user.password}</span>
                </div>
            ))}

            <button onClick={handleRemoveUsers}>Remove Users</button>
        </div>
    );
};

export default UsersRegistered;