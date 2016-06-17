var Main = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },

  buy: function() {
    this.setState({qty: this.state.qty + 1});
  },

  render: function() {
    return (
      <div>
      <p>Android Phone  - $199 </p>
      <button onClick={this.buy} class="btn">Buy</button>
      <h3>Qty: {this.state.qty} item(s)</h3>
      </div>
    );
  }
});
