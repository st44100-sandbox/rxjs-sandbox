import { BehaviorSubject } from 'rxjs/Rx';

export default class Variable {
  constructor(value) {
    this.subject = new BehaviorSubject(value);
  }

  get value() {
    return this.subject.value;
  }

  set value(newValue) {
    this.subject.next(newValue);
  }

  get isUnsubscribed() {
    return this.subjet.isUnsubscribed();
  }

  get observable() {
    return this.subject();
  }

  subscribe(handler) {
    this.subject.subscribe(handler);
  }

  next(value) {
    this.subject.next(value)
  }

  error(error) {
    this.subject.error(error);
  }

  complete() {
    this.subject.complete();
  }
}
