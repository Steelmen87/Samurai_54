type FriendsDialogsType =
    {
        id: number,
        name: string
    }

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andery"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
        {id: 7, name: "Kos"}
    ] as Array<FriendsDialogsType>
}
type initialStateType = typeof initialState
const friendsReducer = (state = initialState, action): initialStateType => {
    return {...state}
}
export default friendsReducer;