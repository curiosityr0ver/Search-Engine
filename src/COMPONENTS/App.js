import React, { Component } from 'react';
import Searchbar from './SearchBar';
import Imagecarousel from './ImageCarousel';
import Imagegrid from './ImageGrid';


class App extends Component {
    state = {
        searchTerm: null,
        resultType: 'image',
    }

    onSearchSubmit = (term, toggle) => {

        this.setState({
            searchTerm: term,
            resultType:toggle,
        })
    }

    displayMethod = () => {

        if (this.state.resultType == "image") {
            return <div><Imagecarousel term={this.state.searchTerm} /></div>
        }

       
    }
    componentDidMount() {
        console.log(this.state)
    }
    componentDidUpdate() {
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <div className='searchbar'><Searchbar onSubmit={this.onSearchSubmit} /></div>
                {this.displayMethod()}
                {/* <Imagegrid/> */}
            </div>

        );
    }
}

export default App;
