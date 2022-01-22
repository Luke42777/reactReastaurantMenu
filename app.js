class App extends React.Component {
    state = { 
       items: [
            {
                id:1,
                name: "potatoes",
                active: true
            },
            {   
                id:2,
                name: "potatoes",
                active: false
            },
            {    
                id:3,
                name: "beetroot salad",
                active: true
            },
            {   
                id:4,
                name: "fries",
                active: false
            },
            {   
                id:5,
                name: "pork chop",
                active: false
            },
            {   
                id:6,
                name: "summer soup",
                active: false
            }
        ]
    } 


    render() { 
        return (
            <>
            <Header items={this.state.items} />
            <ListItems />
            </>
        );
    }
}
 





