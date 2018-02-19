import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  changeQuery(event) {
    this.setState({query: event.target.value})
  }


  render () {
    return <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.query} onChange={this.changeQuery.bind(this)} />
        <button className="btn hidden-sm-down" type="submit" onClick={this.props.onSearch(this.state.query)}>
          <span className="glyphicon glyphicon-search" /> submit
        </button>
      </div>;
  }
}

export default SearchBar;
