import React, { Component } from 'react';

class Searchbar extends Component {


    state = {
        term: "",
        pword: "",
        pwordLabel: "Enter password",
        beginSearch: false
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onPwordChange = (event) => {
        this.setState({ pword: event.target.value })

        if (this.state.pword.length <= 4) {
            this.setState({
                pwordLabel: "Enter longer password"
            })
        } else {
            this.setState({
                pwordLabel: ""
            })
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();  
        this.props.onSubmit(this.state.term);
    }

    // Why below no work :(

    // onInputChange(event) {
    //     this.setState({ term: event.target.value })
    // }

    render() {
        return (
            <div className='ui segment'>
                <form action="" className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label htmlFor=""><h5>Search </h5></label>
                        <input type="text" placeholder='Search...' value={this.state.term} onChange={this.onInputChange} />
                        
                        {/* <input type="password" value={this.state.pword} onChange={this.onPwordChange} />
                        <label htmlFor=""><h5>{this.state.pwordLabel} </h5></label> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
