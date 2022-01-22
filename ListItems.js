const ListItems = (props) => {
    const list = props.items.map(item => <Item handleSelect={props.handleSelect} key={item.id} id={item.id} name={item.name} active={item.active} />)
    return (
        <>
            <h3 style={{color: "crimson"}}>Your order</h3>
            <ul>
                {list}
            </ul>
        </>)
}