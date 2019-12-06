export function manageFriends(prevState = {
    friends: []
}, action= {
    type: "ADD_FRIEND",
    friend: {
        name: 'Avi',
        hometown: 'NYC',
        id: 100
    },
    type:"REMOVE_FRIEND",
    id: 101
}){
    switch(action.type) {
        case "ADD_FRIEND":
            return {...prevState, friends: [...prevState.friends, action.friend]}
        case "REMOVE_FRIEND":
            return {...prevState, friends: [...prevState.friends.filter(friend => friend.id !== action.id)]}
        default:
            return prevState

    }
}


// alternate solution:

// case "REMOVE_FRIEND":
//       const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
//       return (
//         {...state,
//             friends: [
//               ...state.friends.slice(0, removalIndex),
//               ...state.friends.slice(removalIndex + 1)
//             ]
//         }
//       )

//     default:
//       return state;