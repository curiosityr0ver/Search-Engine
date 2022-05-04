import React, { Component } from 'react';
import './ButtonStyle.css'

class Togglebuttons extends Component {

    state = {
        view: 1,
        YTconfig: "youtube icon",
        UNconfig: "camera retro icon disabled",
        WIconfig: "wikipedia w icon disabled",
    }

    onToggle = (term) => {
        switch (term) {
            case "youtube":
                this.setState({
                    view: 1,
                    YTconfig: "youtube icon",
                    UNconfig: "camera retro icon disabled",
                    WIconfig: "wikipedia w icon disabled",
                })
                break;
            case "unsplash":
                this.setState({
                    view: 2,
                    YTconfig: "youtube icon disabled",
                    UNconfig: "camera retro icon",
                    WIconfig: "wikipedia w icon disabled",
                })
                break;
            case "wikipedia":
                this.setState({
                    view: 3,
                    YTconfig: "youtube icon disabled",
                    UNconfig: "camera retro icon disabled",
                    WIconfig: "wikipedia w icon",
                })
                break;
        }
        this.props.onToggleChange(term);
    }
    render() {
        return (
            <div id='btnrow'>
                <div id='btn'><i className={this.state.YTconfig} onClick={() => this.onToggle("youtube")} ></i></div>
                <div id='btn'><i className={this.state.UNconfig} onClick={() => this.onToggle("unsplash")}></i></div>
                <div id='btn'><i className={this.state.WIconfig} onClick={() => this.onToggle("wikipedia")}></i></div>
            </div>
        );
    }
}

export default Togglebuttons;
