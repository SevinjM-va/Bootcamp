import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Ali",
            lastName: "Muradov"
        }

    }
    changeFirstName=()=>{
        this.setState({firstName: "Kamal"});
    }
    render() {
        return(
            <div>
                <p>{this.state.firstName}</p>
                <button type='button' onClick={this.changeFirstName}>Submit</button>
            </div>
        )
    }
}

export default Button