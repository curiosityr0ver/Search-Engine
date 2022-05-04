import React, { Component } from 'react';
import ToggleButtons from './ToggleButtons';
class Searchbar extends Component {

    state = {
        term: "",
        resultType: "wiki",
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.resultType);
    }

    onToggleChange = (resultChild) => {
        this.setState({
            resultType: resultChild
        }, () => {
           
        })
    }


    render() {
        return (
            <div className='ui segment'>
                <form action="" className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field' style={{ display: `inline-block` }}>
                        <input type="text" placeholder={'search ' + this.state.resultType} value={this.state.term} onChange={this.onInputChange} />

                    </div>
                    <ToggleButtons onToggleChange={this.onToggleChange} />
                </form>
            </div >
        );
    }
}

export default Searchbar;
