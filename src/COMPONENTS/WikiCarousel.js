import Axios from 'axios';
import React, { Component } from 'react';
import './WikiStyle.css'
class Wikicarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // term: this.props.term,
            term: "modi",
            selectedArticle: null,
            imageURL: null
        }
    }

    componentDidMount() {

        Axios.get("https://en.wikipedia.org/w/api.php?", {
            params: {
                origin: "*",
                format: "json",
                action: "query",
                prop: 'extracts',
                exchars: 250,
                exintro: true,
                explaintext: true,
                generator: 'search',
                gsrlimit: 20,
                gsrsearch: this.state.term
            }
        }).then((response) => {
            this.setState({
                selectedArticle: Object.values(response.data.query.pages)
            }, () => {
                // console.log(this.state.selectedArticle)
            })
        })
        Axios.get("https://en.wikipedia.org/w/api.php?action=query&titles=Biden&prop=pageimages&format=json&pithumbsize=250", {
            params: {
                origin: "*",
            }
        }).then((response) => {
            // console.log(response.data.query.pages)
            this.setState({
                imageURL: Object.values(response.data.query.pages)[0].thumbnail.source
            }, () => {
                console.log(this.state)
            })
        })


    }

    displayMethod = () => {
        if (this.state.selectedArticle != null) {
            return (
                this.state.selectedArticle.map((article) => {
                    return (
                        <div className='articleCard' key={article.pageid}>
                            <div className='thumbnail'><img src= {this.state.imageURL} alt="" /></div>
                            <div className="content">
                                <div className="title">{article.title}</div>
                                <div className="body">{article.extract}</div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>
                {this.displayMethod()}
            </div>
        );
    }
}

export default Wikicarousel;
