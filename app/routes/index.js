import Route from "@ember/routing/route";
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

export default class IndexRoute extends Route {
  async model() {
    return await calendarDates.getMatrix(new Date()); // date must be dynamic
  }
}
