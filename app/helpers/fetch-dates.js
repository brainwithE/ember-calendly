import { helper } from "@ember/component/helper";
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

const fetchMatrix = async (date = null) => {
  const getMonth = date ? new Date(date) : new Date();
  const data = await calendarDates.getMatrix(getMonth);
  return data;
};

const fetchDates = (params /*, hash*/) => {
  console.log('helper', params);
  return fetchMatrix(params).then((res) => (this.matrix = res));
};

export default helper(fetchDates);
