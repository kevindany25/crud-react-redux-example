import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Kevin Andrade",
        email: "kevin.dany25@gmail.com",
        github: "kevindany25"
    },
    {
        id: "2",
        name: "Kevin Andrade",
        email: "kevin.dany25@gmail.com",
        github: "kevindany25"
    },
    {
        id: "3",
        name: "Kevin Andrade",
        email: "kevin.dany25@gmail.com",
        github: "kevindany25"
    },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    }
})

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;