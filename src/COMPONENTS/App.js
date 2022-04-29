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
        return <div><Imagecarousel term={this.state.searchTerm} /></div>
    }


    render() {
        return (
            <div>
                <div className='searchbar'><Searchbar onSubmit={this.onSearchSubmit} /></div>
                <Imagecarousel term={this.state.searchTerm} />
            </div>

        );
    }
}

export default App;
