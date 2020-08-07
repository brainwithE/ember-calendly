import Component from "@glimmer/component";
import moment from "moment";

export default class CalendarDayComponent extends Component {
  get notThisMonth() {
    return this.args.day.type !== "current";
  }

  get isToday() {
    const { fullDate } = this.args.day;
    const currentDate = new Date();

    const currentDateISO = `${currentDate.getFullYear()}-
    ${currentDate.getMonth()}-
    ${currentDate.getDate()}`;
    
    const fulldateISO = `${fullDate.getFullYear()}-
    ${fullDate.getMonth()}-
    ${fullDate.getDate()}`;

    return currentDateISO === fulldateISO;
  }
}
