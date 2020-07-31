import Route from "@ember/routing/route";
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

export default class IndexRoute extends Route {
  async model() {
    let days = [];
    for (const meta of await calendarDates.getMatrix(new Date())) {
      days.push(meta);
    }
    return days;
  }
}
