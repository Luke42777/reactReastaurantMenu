const Header = (props) => {
 const activeItems = props.items.filter(item => item.active);
 const number = activeItems.length;
    return(
        <header>
            <h1>Poor restaurant</h1>
            <h2>Order summary: {number}</h2>
            <h2>Amount due: {number ? "£" + number * 10 : "No buy No pay"}</h2>
        </header>
    ) 
}
