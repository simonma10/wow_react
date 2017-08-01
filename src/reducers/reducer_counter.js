/*
From Abramov, Getting Started with Redux
 https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe

 */

 export const counter = (state = 0, action) => {
     switch (action.type){
         case 'INCREMENT':
             return state + 1;
         case 'DECREMENT':
             return state -1;
         default:
             return state;
     }
 }