import { useCallback, useReducer } from "react"



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
    const [state, dispatch ] = useReducer(todoReducer,{
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

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(t => !t.checked)


    return{
        visibleTodos: 
        visibleTodos,
        showCompleted : state.visibleTodos,
        toggleTodo : useCallback(
            (todo => dispatch({type: 'TOGGLE_TODO', playload: todo})),
            [],
        ),
        removeTodo : useCallback(
            (todo => dispatch({type: 'REMOVE_TODO', playload: todo})),
            [],
        ),
        clearcompleted : useCallback(
            (todo => dispatch({type: 'CLEAR_COMPLETED', playload: todo})),
            [],
        ),
        togglefilter : useCallback(
            (todo => dispatch({type: 'TOGGLE_FILTER', playload: todo})),
            [],
        )
        
    
    
    }
  }