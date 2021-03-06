import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import { fetchArticle } from '../../ducks/article'

export default class ToolBar extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    searchText: ''
  }

  clearSearch() {
    this.setState({
      searchText: ''
    })
  }

  randomPost() {
    const { posts, dispatch } = this.props
    const post = posts[Math.floor(Math.random() * posts.length)]
    browserHistory.push(`#/note-blog/${post.category}${post.url}`)
    dispatch(fetchArticle(post.category, post.url.split('/')[1]))
  }

  render() {
    return (
      <div className="tool-bar">
        <input className="default-search m-hide" type="text" value={this.state.searchText} placeholder="Search..." />
        <span className="cancel-search m-hide" onClick={() => this.clearSearch()}><i className="fa fa-times" /></span>
        <span className="random-post"><a onClick={() => this.randomPost()}>随机文章</a></span>
      </div>
    )
  }
}
