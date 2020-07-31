import Route from "@ember/routing/route";
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

export default class IndexRoute extends Route {
  async model() {
    const matrix = await calendarDates.getMatrix(new Date());
    console.log(`Matrix`, matrix);
    return matrix;
  }
}
