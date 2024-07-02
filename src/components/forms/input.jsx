/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 * @constructor
 */

export function Input({placeholder, value, type, onChange}){
    return <div className="w-full">
        
        <input type={type}  
            className="w-full px-3 py-2 border border-gray-200 rounded-sm focus:outline-none " 
            value={value}
            placeholder={placeholder} 
            onChange={(e)=>onChange(e.target.value)}
        />
    </div>
}