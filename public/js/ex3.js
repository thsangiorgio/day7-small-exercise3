var AngryBird = React.createClass({
  changeImage() {
    this.setState({hinh: (this.state.hinh %6)+1});
  },
  getInitialState() {
    return {hinh: 1}
  },
  render() {
     return (
       <img src={'images/' + this.state.hinh + '.png'} />
     )
  },
  componentDidMount() {
    setInterval(this.changeImage, 1000);
  }

});
ReactDOM.render(<AngryBird />, document.getElementById('root'));
