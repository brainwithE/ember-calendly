import Model, {attr} from '@ember-data/model';

export default class CalendarModel extends Model {
  @attr selectedDate;
}
