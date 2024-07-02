export function Checkbox({checked, onChange, label, id}){
    return <div className="space-x-2">
        <input type="checkbox" name="" 
            id={id}
            className="focus:outiline-none"
            checked={checked}
            onChange={(e)=> onChange(e.target.checked)}
        />
        <label htmlFor={id} className="text-gray-300">{label}</label>
    </div>
};