import React from 'react';

export default class MyButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <button
          onClick={() => { this.props.onClick(); }}
        >CLICK</button>
        <button
          onClick={() => { this.props.onReset(); }}
        >RESET</button>
      </div>
    );
  }
}
