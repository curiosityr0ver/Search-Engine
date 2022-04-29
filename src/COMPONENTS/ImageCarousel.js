import React, { Component } from 'react';
import Axios from 'axios';

class Imagecarousel extends Component {



    constructor(props) {
        super(props);

        this.state = {
            term: this.props.term,
            urlImage: null,
            count: 0
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

        if (this.props.term != this.state.term) {
            Axios.get("https://api.unsplash.com/search/photos/", {
                params: {
                    // query: this.state.term was the stupid mistake I made, repeatedly using last state values
                    query: this.props.term
                },
                headers: {
                    Authorization: 'Client-ID gNR2-WrevQrk3OVQbx14qQ392jrIkLO8bj2PxZBx0vg'
                }
            }).then((response) => {
                this.setState({
                    urlImage: response.data.results,
                    term: this.props.term
                }, () => {
                });
            })
        }
    }





    displayMethod = () => {

        if (this.state.urlImage != null) {
            return (
                <div className='imageCarousel'>
                    <img src={this.state.urlImage[0].urls.regular} alt="" />
                    <img src={this.state.urlImage[1].urls.regular} alt="" />
                    <img src={this.state.urlImage[2].urls.regular} alt="" />
                    <img src={this.state.urlImage[3].urls.regular} alt="" />
                </div>
            );
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

export default Imagecarousel;
