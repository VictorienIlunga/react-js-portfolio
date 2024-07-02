

export function todoReducer (state, action){
    if(action.type === 'REMOVE_TODO'){
      return{
        ...state,
      todos: state.todos.filter(todo => todo !== action.playload)
      }
    }
    if(action.type ===  'TOGGLE_TODO'){
      return {
        ...state,
        todos: state.todos.map(todo  => todo == action.playload? {
          ...todo,
          checked: !todo.checked

        }: todo)
      }
    }
    if(action.type ===  'CLEAR_COMPLETED'){
      return {
        ...state,
        todos: state.todos.filter(todo  => !todo.checked)
      }
    }
    if(action.type ===  'SHOW_COMPLETED'){
      return {
        ...state,
        showCompleted: !state.showCompleted
      }
    }
    return state
  }

  export function useTodos(){
    const [state, dispatch ] = useReducer(reducer,{
        showCompleted: true,
        todos: [{
          name: 'Faire les courses',
          checked: false
        }, {
          name: 'Ranger les courses',
          checked: false
        }, {
          name: 'Manger les courses',
          checked: false
        }]
      })
  }