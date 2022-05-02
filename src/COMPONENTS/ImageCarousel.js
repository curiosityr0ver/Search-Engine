import React, { Component } from 'react';
import Axios from 'axios';
import ImageCard from './ImageCard';

class Imagecarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: this.props.term,
            urlImage: null,
        }
    }
    // Random Image generator 
    componentDidMount() {
        Axios.get("https://api.unsplash.com/photos/random/", {
            params: {
                count: 4
            },
            headers: {
                Authorization: 'Client-ID gNR2-WrevQrk3OVQbx14qQ392jrIkLO8bj2PxZBx0vg'
            }
        }).then((response) => {
            this.setState({
                urlImage: response.data
            })
        })
    }

    componentDidUpdate() {
        if (this.props.term !== this.state.term) {
            Axios.get("https://api.unsplash.com/search/photos/", {
                params: {
                    // query: this.state.term was the stupid mistake I made, repeatedly using last state values
                    query: this.props.term,
                },
                headers: {
                    Authorization: 'Client-ID 1e3J1lEwSzKxlU7h0pxrjThhxEKvD4O4rkhuKzXvtgU'
                }
            }).then((response) => {
                this.setState({
                    urlImage: response.data.results,
                    term: this.props.term
                })
            })
        }
    }

    displayMethod = () => {

        if (this.state.urlImage != null) {
            return (
                this.state.urlImage.map(
                    image => {
                        return (
                            <ImageCard image={image} key={image.urls.regular} />
                        )
                    }
                )
                //For Each in react doesn't work since it doesn't return anything
            )
        }
    }

    render() {
        return (
            <div className='imageCarousel'>
                {this.displayMethod()}
            </div>
        );
    }
}

export default Imagecarousel;
