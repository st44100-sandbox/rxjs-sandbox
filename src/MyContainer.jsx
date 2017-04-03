import React from 'react';
import ViewModel from './ViewModel';
import MyButtons from './MyButtons.jsx';

export default class MyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.store = new ViewModel({
      count: props.count || 0
    });

    this.state = {
      store: this.store
    }
  }

  componentWillMount() {
    this.store.count.subscribe(() => {
      this.setState({
        store: this.store
      })
    })
  }

  onClick() {
    //this.store.count.next(this.store.count.value + 1);
    this.store.count.value = this.store.count.value + 1;
  }

  render() {
    return(
      <div>
        <p>COUNT: { this.state.store.count.value }</p>
        <MyButtons
          count={this.state.store.count.value}
          onClick={() => { this.onClick(); }}
        />
      </div>
    );
  }
}
