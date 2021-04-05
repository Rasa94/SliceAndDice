import './tableRow.css'; 

export const TableRow = (props) => {
    return (
        <tr key={props.keyProp}>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.ingredients}</td>
            <td>{props.steps}</td>
            <button>Delete</button>
            <button>Update</button>
        </tr>
    )
}