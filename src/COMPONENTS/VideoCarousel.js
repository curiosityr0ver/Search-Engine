import React, { Component } from 'react';
import Videocard from './VideoCard';
import Axios from 'axios';
import VideoDetail from './VideoDetail.js';

class Videocarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: this.props.term,
            urlVideo: null,
            selectedVideo: null
        }
    }
    componentDidMount() {

        Axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyAMX6T47cBcaVYJNxetqD1WLMC7N3GAlPo",
                q: this.state.term
            }
        }).then((response) => {
            this.setState({
                term: this.props.term,
                urlVideo: response.data.items,
                selectedVideo: response.data.items[0]
            })
        })
    }

    componentDidUpdate() {
        if (this.props.term !== this.state.term) {

            Axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    key: "AIzaSyAMX6T47cBcaVYJNxetqD1WLMC7N3GAlPo",
                    q: this.props.term
                }
            }).then((response) => {

                this.setState({
                    term: this.props.term,
                    urlVideo: response.data.items,
                    selectedVideo: response.data.items[0]

                })
            })
        }
    }

    selectVideoMethod = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    displayMethod = () => {
        if (this.state.urlVideo != null) {
            if (this.state.selectedVideo != null) {

                return (
                    <div>
                        <iframe width="280" height="180"
                            src={"https://www.youtube.com/embed/" + this.state.selectedVideo.id.videoId} >

                        </iframe>
                        <VideoDetail video={this.state.selectedVideo} />
                        {this.state.urlVideo.map(
                            video => {
                                return (
                                    <Videocard video={video} key={video.id.videoId} onVideoSelect={this.selectVideoMethod} />
                                )
                            }
                        )}
                    </div>
                )
            } else {
                return (
                    this.state.urlVideo.map(
                        video => {
                            return (
                                <Videocard video={video} key={video.id.videoId} onVideoSelect={this.selectVideoMethod} />
                            )
                        }
                    )
                )
            }
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

export default Videocarousel;
