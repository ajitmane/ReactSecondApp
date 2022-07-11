import React from 'react';
import axios from 'axios';

class UsersList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "items":[],
            "isLoading":false
        }
    }
    componentDidMount(){
        let getData = async()=> {
            let response = await axios("https://jsonplaceholder.typicode.com/users");
            console.log('response ==>', response);
            this.setState({"items": response.data, "isLoading": false})
        }
        console.log('component did mount');
        this.setState({...this.state, "isLoading": true});
        getData();
    }

    render(){
        return(
            <div>
                {this.state.isLoading && <h3>Loading....</h3>}
                <h3>UsersList</h3>
                {this.state.items.length > 0 && 
                    this.state.items.filter((item) =>{
                        return item.name.toLowerCase().indexOf(this.props.name.toLowerCase()) >= 0
                    })
                    .map((item) =>{
                        return <h4>{item.name} - {item.email}</h4>
                    })
                }
            </div>
        )
    }
}

export default UsersList