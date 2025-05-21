export const initialStore=()=>{
  return{
    message: null, 
    todos: [],
    contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
   switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   

case "get_contacts":
  return{
    ...store, contacts:action.payload
  };

case "add_contact":
  return{
    ...store, contacts:[...store.contacts,action.payload]
  };

default:     
  throw Error('Unknown action.');
 }    


}

