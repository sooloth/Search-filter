import './table.css'

export default function Table({data}) {
    
    return (
        <table className="tables">
                <tr>
                    <input type="checkbox" name="" id="check" className="check"/>
                    <label htmlFor="check" className="check"></label>
                    <th>Code</th>
                    <th>Date</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {data.map(item=>(
                <tr key={item.id}>
                    <input type="checkbox" name="" id="check" className="check"/>
                    <label htmlFor="check" className="check"></label>
                    <td>{item.code}</td>
                    <td>{item.date}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                ))}
        </table>
    )
}
