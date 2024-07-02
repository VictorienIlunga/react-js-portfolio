
/**
 * 
 * @param {{name:string, stocked:boolean, price:string}} product 
 * @returns 
 */
export function ProductRow({product}){
    const classValue = product.stocked ? undefined: {className: 'text-red-400'}
    return <tr className={classValue}>
        <td className={classValue} >{product.name}</td>
        <td>{product.price}</td>

    </tr>
}