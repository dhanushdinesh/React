import { configureStore, createSlice } from "@reduxjs/toolkit"
// Newer Redex
const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "Dhanush",
        balance: 250000.
    },

    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
        },
        removeMoney: (state, action) => {
            state.balance -= action.payload;
        }
    },
});

export const { addMoney, removeMoney } = userSlice.actions;

const store = configureStore({
    reducer: { user: userSlice.reducer },
});

export default store;


// Older Redex

// import { createStore } from "redux";


// //inital state
// const initialState = {
//   user: {
//     username: "Dhanush",
//     balance: 25000,
//   },
// };


// // Action creators
// export const addMoney = (amt) => ({
//   type: "addMoney",
//   payload: amt,
// });


// export const removeMoney = (amt) => ({
//   type: "removeMoney",
//   payload: amt,
// });


// // Reducer
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "addMoney":
//       return {
//         user: {
//           username: state.user.username,
//           balance: state.user.balance + action.payload,
//         },
//       };


//     case "removeMoney":
//       return {
//         user: {
//           username: state.user.username,
//           balance: state.user.balance - action.payload, 
//         },
//       };


//     default:
//       return state;
//   }
// }


// const store = createStore(reducer);


// export default store;