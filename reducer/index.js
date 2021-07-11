const todos = {
    items : [
      {id:1,description:"todo 1", isDone:false},
      {id:2,description:"todo 2", isDone:false},
      {id:3,description:"todo 3", isDone:false},
    
    ],
    Filterstate:'all'
  };

const rootReducer = (state = todos, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state,items:[...state.items,action.payload]}
        case 'REMOVE':
            return {...state,items:[...state.items.filter(e=>e.id !== action.payload)]}
        case 'FILTER':
            return  {...state, Filterstate:action.payload}
        case 'EDIT':
            return {...state,items:[...state.items.map((e) => {
                if (e.id === action.payload.id) {
                  e.description = action.payload.newText;
                }
                return e;
              }) ]}
        case 'DONE':
            return  {...state,items:[...state.items.map(e=>{if(e.id===action.payload){
                e.isDone=!e.isDone
                console.log(e.isDone)
              } 
              return e })]}
        default: return state
    }
};

export default rootReducer;