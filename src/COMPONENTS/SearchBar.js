import React, { Component } from 'react';

class Searchbar extends Component {

    state = {
        term: "",
        pword: "",
        resultType: "image",
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {

        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.resultType);
    }

    onToggleChange = () => {
        if (this.state.resultType == "image") {
            this.setState({
                resultType: "video"
            })
        } else {
            this.setState({
                resultType: "image"
            })
        }      
    }

    // componentDidUpdate() {
    //     console.log(this.state)
    // }

    render() {
        return (
            <div className='ui segment'>
                <form action="" className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field' style={{ display: `inline-block` }}>
                        <label htmlFor=""><h5>Search </h5></label>
                        <input type="text" placeholder='Search...' value={this.state.term} onChange={this.onInputChange} />

                    </div>
                    <div id='imageToggle' className="ui toggle checkbox" style={{ display: `inline-block` }}>
                        <input div type="checkbox" name="public" onChange={this.onToggleChange}/>
                        <label id='imageToggleLabel' >Image</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
