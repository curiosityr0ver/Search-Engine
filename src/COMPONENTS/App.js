import React, { Component } from 'react';
import Searchbar from './SearchBar';
import Imagecarousel from './ImageCarousel';
// import Imagegrid from './ImageGrid';
import Videocarousel from './VideoCarousel';
import Wikicarousel from './WikiCarousel';


class App extends Component {
    state = {
        searchTerm: null,
        resultType: 'youtube',
    }

    onSearchSubmit = (term, toggle) => {

        this.setState({
            searchTerm: term,
            resultType: toggle,
        }, () => {
            
        })
    }

    displayMethod = () => {
        console.log(this.state)
        if (this.state.resultType == "unsplash") {
            return <div>
                <Imagecarousel term={this.state.searchTerm} />
            </div>
        }
        else if (this.state.resultType == "wikipedia") {
            return <div className='wikiCarousel'>
                <Wikicarousel term={this.state.searchTerm} />
            </div>
        }
        else {
            return <div ><Videocarousel term={this.state.searchTerm} /></div>
        }
    }

    render() {
        return (
            <div>
                <div className='searchbar'><Searchbar onSubmit={this.onSearchSubmit} onToggle={this.onTypeToggle} /></div>
                {this.displayMethod()}
                {/* <Imagegrid/> */}
            </div>

        );
    }
}

export default App;
