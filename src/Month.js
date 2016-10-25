/* @flow */

import React from 'react';
import {View, Text} from 'react-native';
import DateTime from 'immutable-datetime';
import DateView from './Date';

import {stylesDate} from './Calendar-style';
import {getCalendarArray} from './helpers/calendar';

type Props = {
  selectedMonth: ?DateTime;
  onDateSelect: Function;
}

export default function MonthView(props: Props) {
  let {selectedMonth, onDateSelect} = props;
  if (selectedMonth == null) {
    selectedMonth = DateTime.now();
  }
  let currentYear = selectedMonth.getYear();
  let currentMonth = selectedMonth.getMonth();
  let weeks = getCalendarArray(currentYear, currentMonth);
  let spinner = (
    <View style={stylesDate.calendarBody}>
      {weeks.map(RenderWeek)}
    </View>
  );
  function RenderWeek(week: Array<?DateTime>, i: number) {
    return (
      <View key={i.toString()} style={stylesDate.weeks}>
        {week.map(RenderDate)}
      </View>
    );
  }
  function RenderDate(day: ?DateTime, i: number) {
    return (
      <DateView
        day={day}
        key={i.toString()}
        onDateSelect = {onDateSelect}
      />
    );
  }
  return (
    <View style={stylesDate.calendarContainer}>
      <View style={stylesDate.calendarHeader}>
        <Text style={stylesDate.dayText}>SUN</Text>
        <Text style={stylesDate.dayText}>MON</Text>
        <Text style={stylesDate.dayText}>TUE</Text>
        <Text style={stylesDate.dayText}>WED</Text>
        <Text style={stylesDate.dayText}>THU</Text>
        <Text style={stylesDate.dayText}>FRI</Text>
        <Text style={stylesDate.dayText}>SAT</Text>
      </View>
      {spinner}
    </View>
  );
}
