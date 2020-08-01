import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import moment from "moment";

import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

// matrix = aysnc () => {
//   const matrix = await calendarDates.getMatrix(new Date()); // date must be dynamic
//   return matrix;
// }

const fetchMatrix = async (date = null) => {
  const getMonth = date ? new Date(date) : new Date();
  const data = await calendarDates.getMatrix(getMonth);
  return data;
};

export default class CalendarComponent extends Component {
  @tracked matrix = this.fetchDates();
  @tracked selectedDate = moment().format("MM/DD/YYYY");
  @tracked currentMonth = moment().format("MMMM YYYY");
  @tracked monthCounter = 0

  @action fetchDates(date) {
    fetchMatrix(date).then((res) => (this.matrix = res));
  }

  @action changeDate(date) {
    this.selectedDate = moment(date).format("MM/DD/YYYY");
  }

  @action changeMonth(type) {
    this.monthCounter = this.monthCounter + type;
    console.log('moment', moment()  )
    const month = moment().add(this.monthCounter, "month");
    this.currentMonth = month.format("MMMM YYYY");
    this.matrix = this.fetchDates(month);
  }

  get dayNames() {
    return moment.weekdaysMin();
  }
}
