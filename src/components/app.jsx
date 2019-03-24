import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	gifs: [],
	  	selectedGifId: null,
	  	searchBarFocused: true
	  };
	}

	search = (query) => {
		giphy('HLmaOXo9mGNggTsZ6yW2uuBsSSfAB2rW').search({
    		q: query,
    		rating: 'g',
    		limit: 3
		}, (error, result) => {
    		this.setState({
    			gifs: result.data
    		});
		});
	}

	selectGif = (id) => {
		this.setState({
			selectedGifId: id
		});
	}

	searchBarFocus = (way) => {
		if (way == 'in') {
			this.setState({ searchBarFocused: true });
		} else {
			this.setState({ searchBarFocused: false });
		}
	}

	render() {
		return(
			<div>
				<div className="left-scene">
					<SearchBar searchFunction={this.search} searchBarFocus={this.searchBarFocus} />
					<div className={this.state.searchBarFocused ? "focused selected-gif" : "selected-gif"}>
						<Gif id={this.state.selectedGifId} />
					</div>
				</div>
				<div className="right-scene">
					<GifList gifs={this.state.gifs} selectGif={this.selectGif} />
				</div>
			</div>
		);
	}
}

export default App;