var redux = require("redux");

var stateDefault = {
    name:"Mughees Default",
    hobbies:[]
}
var nextHobbyId = 1;
var reducer = ((state = stateDefault,action)=>{
    switch (action.type){
        case "CHANGE_NAME":
        return {
            ...state,
            name:action.name
        };
        case "ADD_HOBBY":
        return {
           ...state,
           hobbies:[
               ...state.hobbies,
               {
                   hobby:"action.hobby",
                   id:nextHobbyId++
               }
           ]
        }
        default:
        return state;

    }
})

var store = redux.createStore(reducer);
//subcribe 
store.subscribe(()=>{
    var state = store.getState();
    console.log(state.name + " state name")
    console.log(store.getState());
})
//
store.dispatch({
    type:"CHANGE_NAME",
    name:"Mulla"
})
store.dispatch({
  type:"CHANGE_NAME",
  name:"Mughees",   
});

store.dispatch({
    type:"ADD_HOBBY",
    hobby:"running"
})