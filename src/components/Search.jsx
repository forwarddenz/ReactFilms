import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    SearchChange = (e) => {
        this.setState({ [e.target.name]: (e.target.value).toLowerCase() });
    }

    handleKey = () => {
        if (this.state.search != '') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input name='search' placeholder='Search' type="search" className="validate" calue={this.state.search} onChange={this.SearchChange} />
                    <a className="waves-effect waves-light btn search-btn" onClick={this.handleKey}>button</a>
                </div>
                <div className='radio-filter'>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                        <span>Only Movies</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                        <span>Only Series</span>
                    </label>
                </div>
            </div>
        )
    }

}

export { Search };