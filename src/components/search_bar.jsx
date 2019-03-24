import React, { Component } from 'react';

class SearchBar extends Component {
	handleChange = (event) => {
		this.props.searchFunction(event.target.value);
	}

	handleFocus = () => {
		this.props.searchBarFocus('in');
	}

	handleBlur = () => {
		this.props.searchBarFocus('out');
	}

	render() {
		return(
			<input 
				autoFocus="true" 
				type="text" 
				placeholder="Search for a gif ..." 
				className="form-control form-search" 
				onChange={this.handleChange} 
				onFocus={this.handleFocus} 
				onBlur={this.handleBlur}/>
		);
	}
}

export default SearchBar;
