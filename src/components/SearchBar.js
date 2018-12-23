import React from 'react';



class SearchBar extends React.Component {

    state = {term: ''};

  onSubmitChange= (event) => {
      event.preventDefault();
      this.props.onSubmitting(this.state.term);
  };





    render() {
        return (
            <div className="ui segment">
                {/*<form onSubmit={e => {e.preventDefault(); console.log(this.state.term)}} className="ui form">*/}
                    <form onSubmit={this.onSubmitChange} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/*<input type="text" onChange={this.onInputChange}  placeholder={"Search..."}/>*/}
                        <input type="text" value={this.state.term} onChange={ e => this.setState({term: e.target.value})}  />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;