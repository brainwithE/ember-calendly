import Component from '@glimmer/component';
import { action } from '@ember/object';
import moment from 'moment';

export default class CalendarDayComponent extends Component {
  @action testClick() {
    console.log('clicked', this.args.day.iso)
  }

  get notThisMonth() {
    return this.args.day.type !== 'current'
  }
  
  get isToday() {
    return this.args.day.iso === moment().format('YYYY-MM-DD');
  }
}
