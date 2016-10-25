//@flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import {Text, View, TouchableHighlight} from 'react-native';
import DateTime from 'immutable-datetime';
import CalendarView from '../Calendar';
import MonthView from '../Month';
import DateView from '../Date';

describe('CalendarView tests', () => {
  let onNext = createSpy();
  let onPrev = createSpy();
  let onDateSelect = createSpy();
  let onMonthChange = createSpy();
  let onMonthsShow = createSpy();
  let onYearsShow = createSpy();
  let onYearChange = createSpy();
  const calendarProps = {
    selectedMonth: DateTime.fromString('2016-01-10T12:03:49Z'),
    onNext,
    onPrev,
    onDateSelect,
    onMonthChange,
    isMonthsShowing: false,
    isYearsShowing: false,
    onMonthsShow,
    onYearChange,
    onYearsShow,
  };

  it('should renders CalendarView', () => {
    let wrapper = shallow(<CalendarView {...calendarProps} />);
    expect(wrapper.find(Text).length).toBe(2);
    expect(wrapper.find(TouchableHighlight).length).toBe(2);
    expect(wrapper.find(View).length).toBe(9);

    expect(onNext).toNotHaveBeenCalled();
    wrapper.find(TouchableHighlight).at(1).simulate('press');
    expect(onNext).toHaveBeenCalled();
    expect(onPrev).toNotHaveBeenCalled();
    wrapper.find(TouchableHighlight).at(0).simulate('press');
    expect(onPrev).toHaveBeenCalled();

    let dateViewWrapper = wrapper.find(MonthView).shallow().find(DateView);
    expect(dateViewWrapper.length).toBe(42);
    expect(dateViewWrapper.at(10).shallow().find(TouchableHighlight).length).toBe(1);

    expect(onDateSelect).toNotHaveBeenCalled();
    dateViewWrapper.at(10).shallow().find(TouchableHighlight).at(0).simulate('press');
    expect(onDateSelect).toHaveBeenCalled();
  });
});
