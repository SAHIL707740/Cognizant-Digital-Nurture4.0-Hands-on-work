import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postObjects = data.slice(0, 5).map(post => new Post(post.id, post.title, post.body));
        this.setState({ posts: postObjects });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error.toString());
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
