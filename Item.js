const Item = (props) => {
    return (
        <li onClick={() => props.handleSelect(props.id)} className={props.active ? "enable": ""} >
            {props.name}
        </li>
    )
}

