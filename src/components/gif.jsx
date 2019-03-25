import React, { Component } from 'react';

class Gif extends Component {
	handleClick = () => {
	    if (this.props.selectGif) {
	      this.props.selectGif(this.props.id);
	    }
	}

	render() {
		const { id } = this.props
		if (!id) {
			return null;
		}

		const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
		return(
			<img src={src} alt="" className="gif" onClick={this.handleClick} />
		);
	}
}

export default Gif;
