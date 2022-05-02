import React, { Component } from 'react';
import Searchbar from './SearchBar';
import Imagecarousel from './ImageCarousel';
// import Imagegrid from './ImageGrid';
import Videocarousel from './VideoCarousel';


class App extends Component {
    state = {
        searchTerm: null,
        resultType: 'image',
    }

    onSearchSubmit = (term, toggle) => {

        this.setState({
            searchTerm: term,
            resultType: toggle,
        })
    }

    displayMethod = () => {

            if (this.state.resultType == "image") {
                return <div>
                    <Imagecarousel term={this.state.searchTerm} />
                </div>
            } else {
                return <div><Videocarousel term={this.state.searchTerm} /></div> 
            }
    }

    render() {
        return (
            <div>
                <div className='searchbar'><Searchbar onSubmit={this.onSearchSubmit} onToggle = {this.onTypeToggle} /></div>
                {this.displayMethod()}
                {/* <Imagegrid/> */}
            </div>

        );
    }
}

export default App;
