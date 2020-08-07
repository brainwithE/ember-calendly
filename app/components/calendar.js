import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CalendlyComponent extends Component {
  @tracked selectedDate = this.currentDate;
  @tracked selectedMonth = this.selectedDate.getMonth();
  @tracked selectedYear = this.selectedDate.getFullYear();
  @tracked matrix = this.loadCalendarDays(
    this.selectedYear,
    this.selectedMonth
  );

  get dayNames() {
    return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  }

  get currentDate() {
    return new Date();
  }

  get totalDays() {
    return this.daysInMonth(this.selectedMonth, this.selectedYear);
  }

  @action loadCalendarDays(year, month) {
    const startDate = this.startOfWeek(new Date(year, month, 1));
    const rows = 6;
    const cols = 7;
    const length = rows * cols;
    return (
      Array.from({ length })
        // create a list of dates
        .map((_, index) => {
          const updatedDate = this.addDays(startDate, index);
          return {
            date: updatedDate.getDate(),
            fullDate: updatedDate,
            type:
              updatedDate.getMonth() === this.selectedMonth
                ? "current"
                : updatedDate.getMonth() > this.selectedMonth
                ? "next"
                : "prev",
          };
        })
        // fold the array into a matrix
        .reduce((matrix, current, index, days) => {
          return !(index % cols !== 0)
            ? [...matrix, days.slice(index, index + cols)]
            : matrix;
        }, [])
    );
  }

  @action addDays(date, addedDays) {
    let initialDate = new Date(date);
    initialDate.setDate(initialDate.getDate() + addedDays);
    return initialDate;
  }

  @action daysInMonth(monthIndex, year) {
    const totalDays = new Date(year, monthIndex + 1, 0);
    return totalDays.getDate();
  }

  @action startOfWeek(param) {
    const date = new Date(param);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 0);

    return new Date(date.setDate(diff));
  }

  @action changeDate(date) {
    this.selectedDate = date;
  }

  @action changeSelectedMonth(type) {
    if (type === "next") {
      this.selectedMonth = this.selectedMonth < 11 ? this.selectedMonth + 1 : 0;
      this.selectedYear =
        this.selectedMonth === 0 ? this.selectedYear + 1 : this.selectedYear;
    } else {
      this.selectedMonth = this.selectedMonth > 0 ? this.selectedMonth - 1 : 11;
      this.selectedYear =
        this.selectedMonth === 11 ? this.selectedYear - 1 : this.selectedYear;
    }

    this.matrix = this.loadCalendarDays(this.selectedYear, this.selectedMonth);
  }
}
