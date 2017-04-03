console.log('Hello, World!')
import Rx from 'rxjs/Rx';

import React from 'react';
import ReactDOM from 'react-dom';

import ViewModel from './ViewModel';
import MyContainer from './MyContainer.jsx';

Rx.Observable.of(1, 2, 3);

const buttonClickStream = Rx.Observable.fromEvent(document.getElementById('a_button'), 'click');
const linkClickStream = Rx.Observable.fromEvent(document.getElementById('a_link'), 'click');
const searchInputStream = Rx.Observable.fromEvent(document.getElementById('a_search_form'), 'change');

linkClickStream
  .buffer(linkClickStream.throttleTime(250))
  .map((x) => {
    return x.length;
  })
  .filter((n) => {
    return n >= 2;
  })
  .subscribe((n) => {
    console.log(`${n} Clicked!`);
  });

buttonClickStream.subscribe(
  (x) => {
    console.log('CLICKED', x)
  },
  (err) => {
    console.log('ERROR', err)
  },
  () => {
    console.log('COMPLETE')
  }
);

// searchInputStream
//   .debounce(500)
//   .map((e) => { e.target.value; })
//   .filter((q) => { q.length > 0; })
//   .select((q) => { q.length > 0; })


const vm = new ViewModel({
  name: 'a'
});

vm.name.subscribe(console.log);
vm.name.value = 'b';


ReactDOM.render(
  React.createElement(MyContainer, {}),
  document.getElementById('a_react_comp'),
)
