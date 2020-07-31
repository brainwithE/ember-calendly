import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import moment from "moment";

export default class CalendarComponent extends Component {
  @tracked selectedDate = moment().format("DD/MM/YYYY");
  @tracked currentMonth = moment().format("MMMM");

  @action changeDate(date) {
    this.selectedDate = moment(date).format("DD/MM/YYYY");
  }

}
