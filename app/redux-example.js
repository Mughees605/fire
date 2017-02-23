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
            hobbies:[action.name]
        };
        default:
        return state;

    }
})

var store = redux.createStore(reducer);
//subcribe 
store.subscribe(()=>{
    var state = store.getState();
    console.log(state);
})
store.dispatch({
    type:"CHANGE_NAME",
    name:"Mughees"
})