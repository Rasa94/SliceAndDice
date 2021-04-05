import './formField.css';

export const FormField = (props) => {
    return (
        <div className='formRow'>
            <label className="formLabel" >{props.labelProp}</label>
            <div className="inputContainer">
                <input type={props.typeProp} name={props.nameProp} value={props.valueProp} onChange={props.eventProp}/>
                {props.button && <button className="addElBtn" onClick={props.btnEvent} name={props.nameProp}>Add</button>}
            </div>
            
        </div> 
    )
}