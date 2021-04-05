import './formList.css';

export const FormList = (props) => {
    return (
        <ul>
            {props.step.map(el => {
                return (
                    <li key={Math.round(Math.random()*100000)}>
                        {el}
                        <button name={props.nameProp} onClick={(e) => props.deleteEvent(el, e)}>
                            X
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}