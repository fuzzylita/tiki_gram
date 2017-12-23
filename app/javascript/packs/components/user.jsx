// this card component is pretty common. Reuse it for user info


class UserCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.url} /> //these will need to be changed. Theyre just placeholders
        <h2>{this.props.username}</h2>
=      </div>
    );
  }
}

