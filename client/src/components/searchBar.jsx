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
    return <div>
        <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)} />
        <button type="submit" onClick={() => {this.props.onSearch(this.state.query)}}> submit
        </button>
      </div>;
  }
}

export default SearchBar;
