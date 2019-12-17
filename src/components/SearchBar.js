import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// import articleService from './../lib/article-service'

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  // handleSubmit = event => {
  //     event.preventDefault();
  //     // articleService.articleByName( searchTerm  ).then(res => {
  //     //     console.log(res);

  //     //         //   this.setState({ articleDetail: res });
  //     //         })

  //     console.log('asasasas', this.props);
  //     this.props.history.push(`/by-name/${this.state.searchResult}`)

  // }

  handleChange = event => {
    let searchTerm = event.target.value;
    console.log('Res:',searchTerm);
    this.setState({ searchTerm });
  };

  render() {
    console.log('Render:',this.state.searchTerm);
    return (
      <div className="search-bar">
        <form>
          <input type="text" name="search-query" onChange={this.handleChange} />
          <Link to={`/articles/by-name/${this.state.searchTerm}`}>Search</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
