import React, { Component } from 'react';
import './videocardStyles.css'
class Videocard extends Component {

    onVideoCardClick = () => {
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        const { id, snippet } = this.props.video;

        return (
            <div className='videoCard' onClick={this.onVideoCardClick}>
                <img className='videoThumb' src={snippet.thumbnails.medium.url} alt="" />
                <div className="videoText">
                    <div className=""><b>{snippet.title}</b></div>
                    <div className="">{snippet.description}</div>
                </div>


            </div>
        );
    }
}

export default Videocard;
