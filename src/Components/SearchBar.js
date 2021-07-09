import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        // Todo make sure call callback from parent component
    }

    render() {
        return(
            <div className='searchBar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text' onChange={this.onInputChange} value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;