import Component from "@glimmer/component";
import moment from "moment";

export default class CalendarDayComponent extends Component {
  get notThisMonth() {
    return this.args.day.type !== "current";
  }

  get isToday() {
    return this.args.day.iso === moment().format("YYYY-MM-DD");
  }
}
