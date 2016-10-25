/* @flow */

import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import MonthView from './Month';
import DateTime from 'immutable-datetime';
import Icon from 'react-native-vector-icons/Entypo';

import {stylesDate, fontDefault} from './Calendar-style';
import {getMonthName} from './helpers/calendar';
import Dropdown from 'react-native-modal-select-option';

type Props = {
  selectedMonth: ?DateTime;
  onNext: (selectedMonth: DateTime) => void;
  onPrev: (selectedMonth: DateTime) => void;
  onDateSelect: (date: DateTime) => void;
  onMonthChange: (current: Object, isShow: boolean) => void;
  onYearChange: (year: Object, isShow: boolean) => void;
  onMonthsShow: (value: boolean) => void;
  onYearsShow: (value: boolean) => void;
  isMonthsShowing: boolean;
  isYearsShowing: boolean;
  yStart?: number;
  yEnd?: number;
};

export default function CalendarView(props: Props) {
  let {selectedMonth, onDateSelect, onNext, onPrev, onMonthChange, onMonthsShow, isMonthsShowing} = props;
  if (selectedMonth == null) {
    selectedMonth = DateTime.now();
  }
  let currentYear = selectedMonth.getYear();
  let yStart = props.yStart ? props.yStart : DateTime.now().getYear();
  let yEnd = props.yEnd ? props.yEnd : DateTime.now().getYear();
  let currentMonth = selectedMonth.getMonth();
  let yOptions = [];
  for (yStart; yStart <= yEnd; yStart += 1) {
    yOptions.push({value: yStart, label: yStart});
  }
  const propsYearsDropdown = {
    selectedOption: {value: currentYear, label: currentYear},
    options: yOptions,
    animationType: 'none',
  };
  const propsMonthsDropdown = {
    selectedOption: {value: currentMonth, label: getMonthName(currentMonth)},
    options: [
      {value: 0, label: getMonthName(0)}, {value: 1, label: getMonthName(1)}, {value: 2, label: getMonthName(2)},
      {value: 3, label: getMonthName(3)}, {value: 4, label: getMonthName(4)}, {value: 5, label: getMonthName(5)},
      {value: 6, label: getMonthName(6)}, {value: 7, label: getMonthName(7)}, {value: 8, label: getMonthName(8)},
      {value: 9, label: getMonthName(9)}, {value: 10, label: getMonthName(10)}, {value: 11, label: getMonthName(11)},
    ],
    animationType: 'none',
  };
  let onNextPress = () => {
    onNext(selectedMonth);
  };
  let onPrevPress = () => {
    onPrev(selectedMonth);
  };

  return (
    <View style={{flex: 1}}>
      <View style={stylesDate.monthContainer}>
        <View style={stylesDate.year}>
          <View style={stylesDate.yearText}>
            <Dropdown {...propsYearsDropdown}
              onSelect={props.onYearChange}
              onShow={props.onYearsShow}
              isShowingOptions={props.isYearsShowing}
            />
          </View>
        </View>
        <View style={stylesDate.month}>
          <View style={stylesDate.monthText}>
            <Dropdown {...propsMonthsDropdown}
              onSelect={onMonthChange}
              onShow={onMonthsShow}
              isShowingOptions={isMonthsShowing}
            />
          </View>
          <View style={stylesDate.monthSpacer} />
          <View>
            <TouchableHighlight style={stylesDate.arrow} onPress={onPrevPress} underlayColor={'#25aa0f'}>
              <Text>
                <Icon name="chevron-thin-left" size={fontDefault * 1.5} color="white" />
              </Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight style={stylesDate.arrow} onPress={onNextPress} underlayColor={'#25aa0f'}>
              <Text>
                <Icon name="chevron-thin-right" size={fontDefault * 1.5} color="white" />
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <MonthView
        selectedMonth={selectedMonth}
        onDateSelect={onDateSelect}
      />
    </View>
  );
}
