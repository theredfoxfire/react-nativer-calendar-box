/* @flow */

import DateTime from 'immutable-datetime';

/* Calendar helpers */
let monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December',
];

let dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday',
];
type Week = Array<?DateTime>

function getEmptyWeekArray(): Array<?DateTime> {
  let array = new Array(7);
  array.fill(null);
  return array;
}

export function getCalendarArray(year: number, month: number): Array<Week> {
  let weeks = [];
  let firstDay = DateTime.fromDateParts(year, month, 1);
  let firstDayOfNextMonth = DateTime.fromDateParts(year, month + 1, 1);
  let currentWeek = getEmptyWeekArray();
  let currentWeekIsEmpty = true;
  let currentDay = firstDay;
  while (currentDay.toNumber() < firstDayOfNextMonth.toNumber()) {
    let dayOfWeek = currentDay.getDay();
    currentWeek[dayOfWeek] = currentDay;
    currentWeekIsEmpty = false;
    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = getEmptyWeekArray();
      currentWeekIsEmpty = true;
    }
    currentDay = currentDay.addDays(1);
  }
  if (!currentWeekIsEmpty) {
    weeks.push(currentWeek);
  }
  return weeks;
}

export function getMonthName(currentMonth: number): string {
  return monthNames[currentMonth];
}

export function getDayName(dayIndex: number): string {
  return dayNames[dayIndex];
}

export function setDisplayTime(dateTime: DateTime): string {
  let time = dateTime;
  let minutes = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes());
  let hours = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours());
  return (hours + '.' + minutes);
}

export function displayDateTime(dateTime: DateTime): string {
  if (dateTime != null) {
    let month = getMonthName(dateTime.getMonth());
    let time = displayTime(dateTime);
    return `${month} ${dateTime.getDate()}, ${dateTime.getYear()} at ${time}`;
  }
  return '';
}

function displayTime(dateTime: DateTime): string {
  if (dateTime != null) {
    let time = dateTime;
    let minutes = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes());
    let hours = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours());
    return (hours + ':' + minutes);
  }
  return '';
}

export function getHoursList(date: DateTime): Array<DateTime> {
  let hoursList = [];
  if (date != null) {
    for (let i = 7; i < 19; i += 1) {
      hoursList.push(date.addHours(i));
      hoursList.push(date.addHours(i).addMinutes(30));
    }
  }
  return hoursList;
}
