import { useState } from "react"

/**
 * 
 * @param {boolean} initial 
 */
export function useToggle(initial){
    const [state, setState] = useState(true)
    const toggle = ()=> setState(v => !v)
    return [state, toggle]
  }