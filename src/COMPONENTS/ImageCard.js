import React, { Component } from 'react';

class Imagecard extends Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    state = {
        spans: 0
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const heightAlt = this.imageRef.current.clientHeight;
        this.setState({
            spans: Math.ceil(heightAlt / 10) + 1
        })
    }

    render() {

        const { urls, key, links } = this.props.image;
        // const span = Math.ceil(height / 250);
        const span = this.state.spans;
        return (
            <div style={{ gridRowEnd: `span ${span}` }}>

                <a href={links.html} target="_blank"><img className='ImageCardPic' ref={this.imageRef} src={urls.regular} key={key} />
                </a>
            </div>
        );
    }
}

export default Imagecard;
