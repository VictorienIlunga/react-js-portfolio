/**
 * 
 * @param {string} name 
 * @returns 
 */
export function ProductCategoryRow ({name}){
    return <tr>
        <td className="font-bold" colSpan={2}>{name}</td>
    </tr>
}