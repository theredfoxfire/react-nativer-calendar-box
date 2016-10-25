/* @flow */

import React from 'react';
import DateTime from 'immutable-datetime';

import {View, Text, TouchableHighlight} from 'react-native';
import {stylesDate} from './Calendar-style';

type Props = {
  day: ?DateTime;
  onDateSelect: Function;
}

export default function DateView(props: Props) {
  let {day, onDateSelect} = props;
  let todayBoxStyle = stylesDate.dateNotToday;
  let todayTextStyle = stylesDate.dateText;
  let onPress = () => {
    onDateSelect(day);
  };
  let dateView;
  if (day != null) {
    if (day.toDateString() === DateTime.now().toDateString()) {
      todayBoxStyle = stylesDate.dateToday;
      todayTextStyle = stylesDate.todayDateText;
    }
    dateView = (
      <TouchableHighlight style={todayBoxStyle} onPress={onPress} underlayColor={'#25aa0f'}>
        <View style={stylesDate.date}>
          <Text style={todayTextStyle}>{day.getDate()}</Text>
        </View>
      </TouchableHighlight>
    );
  } else {
    dateView = (
      <View style={todayBoxStyle}>
        <View style={stylesDate.date}>
          <Text>{' '}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={stylesDate.dateContainer}>
      {dateView}
    </View>
  );
}
