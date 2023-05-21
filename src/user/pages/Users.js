import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Max Schwarz",
            image:
                "https://images.unsplash.com/photo-1587613990808-9d5c5e8e9f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            places: 3
        }
    ];
    return <UsersList items={USERS} />;
    }

export default Users;