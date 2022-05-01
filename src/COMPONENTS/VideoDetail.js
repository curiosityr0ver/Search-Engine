import React, { Component } from 'react';

class Videodetail extends Component {


    render() {
        const { snippet } = this.props.video
        return (
            <div className='videoDetail'>
                <div className="videoText">
                    <div className=""><h3><b>{snippet.title}</b></h3></div>
                    <div className="">{snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default Videodetail;
