class App extends React.Component {
    state = { 
       items: [
            {
                id:1,
                name: "potatoes",
                active: false
            },
            {   
                id:2,
                name: "rice",
                active: false
            },
            {    
                id:3,
                name: "beetroot salad",
                active: false
            },
            {   
                id:4,
                name: "fries",
                active: false
            },
            {   
                id:5,
                name: "water soup",
                active: false
            },
            {   
                id:6,
                name: "summer soup",
                active: false
            }
        ]
    }

    handleSelect = (id) => {
        const Items = this.state.items.map(item => {
            if(item.id === id){
                item.active = !item.active
            }
            return item;
        })
        this.setState({
            items: Items,
        })
    }

    render() { 

        return (
            <>
            <Header items={this.state.items} />
            <ListItems items={this.state.items} handleSelect={this.handleSelect} />
            </>
        )
    }
}
 





