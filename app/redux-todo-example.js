var redux = require("redux");


console.log("starting todo example");

var setDefault = {
   searchText:"",
   showCompleted:false,
   todos:[]
}
var reducer = (state=setDefault,action) =>{
    switch(action.type){
        case "ADD_TODO":
        return {
            ...setDefault,
            searchText:action.searchText,
            showCompleted:action.searchText,
            todos:action.todos
        }
    }
   return state
}
var store = redux.createStore(reducer);
console.log("createStore",store.getState())


store.dispatch({
    type:"ADD_TODO",
    searchText:"work",
    showCompleted:true,
    todos:["12"]
})
console.log(store.getState());