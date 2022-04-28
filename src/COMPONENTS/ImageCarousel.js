import React, { Component } from 'react';
import Axios from 'axios';

class Imagecarousel extends Component {

    state = {
        term: this.props.term,
        urlImage: null
    }

    // componentDidMount() {


    //     Axios.get("https://api.unsplash.com/photos/random/", {
    //         params: {
    //             query: this.state.term
    //         },
    //         headers: {
    //             Authorization: 'Client-ID gNR2-WrevQrk3OVQbx14qQ392jrIkLO8bj2PxZBx0vg'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.urls.regular);
    //         this.setState({
    //             urlImage: response.data.results
    //         })
    //     })
    // }

    componentDidMount() {
        Axios.get("https://api.unsplash.com/search/photos/", {
            params: {
                query: this.state.term
            },
            headers: {
                Authorization: 'Client-ID gNR2-WrevQrk3OVQbx14qQ392jrIkLO8bj2PxZBx0vg'
            }
        }).then((response) => {
            console.log(response.data.results);
            this.setState({
                urlImage: response.data.results
            })
        })

    }

    displayMethod = () => {
        if (this.state.urlImage != null) {
            return (
                <div>
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
