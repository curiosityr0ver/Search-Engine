import React, { Component } from 'react';
import Searchbar from './SearchBar';
import Imagecarousel from './ImageCarousel';


class App extends Component {
    state = {
        searchTerm: null
    }

    onSearchSubmit = (term) => {
        this.setState({
            searchTerm: term
            
        })
        
    }

    displayMethod = () => {
        if (this.state.searchTerm != null) {
            
            return <div><Imagecarousel term={this.state.searchTerm} /></div>
        } 
    }


    render() {
        return (
            <div className='ui container'>
                <Searchbar onSubmit={this.onSearchSubmit} />
                {this.displayMethod()}
            </div>

        );
    }
}

export default App;
