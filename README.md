# react-native-calendar-box

react-native-calendar-box is calendar picker with box 

available in npm [react-native-calendar-box](https://www.npmjs.com/package/react-native-calendar-box)

## install package from [npm](https://www.npmjs.com/)

`$ npm install --save react-native-calendar-box`

## link material icons use [rnpm](https://github.com/rnpm/rnpm)

`$ rnpm link react-native-vector-icons`

## example of usage

```javascript

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {View, Text, TouchableHighlight, AppRegistry,} from 'react-native';
 import DateTime from 'immutable-datetime';
 import CalendarView from 'react-native-calendar-box';

 type State = {
   selectedMonth: DateTime;
   selectedDate: ?DateTime;
   isCalendarShowUp: boolean;
   isMonthsShowing: boolean;
   isYearsShowing: boolean;
 };

 export default class CalendarDemo extends Component {
   state: State;
   constructor() {
     super(...arguments);
     this.state = {
       selectedMonth: DateTime.now(),
       selectedDate: null,
       isCalendarShowUp: false,
       isMonthsShowing: false,
       isYearsShowing: false,
     };
   }
   render() {
     const calendarProps = {
       selectedMonth: this.state.selectedMonth,
       onNext: this._onNext.bind(this),
       onPrev: this._onPrev.bind(this),
       onDateSelect: this._onDateSelect.bind(this),
       onMonthChange: this._onMontChange.bind(this),
       isMonthsShowing: this.state.isMonthsShowing,
       isYearsShowing: this.state.isYearsShowing,
       onMonthsShow: this._onMonthsShow.bind(this),
       onYearsShow: this._onYearsShow.bind(this),
       onYearChange: this._onYearChange.bind(this),
       yStart: 2010,
       yEnd: 2017,
     };
     if (this.state.isCalendarShowUp) {
       return <CalendarView {...calendarProps}/>;
     }
     return (
       <View style={{marginTop: 50, padding: 10}}>
        <TouchableHighlight onPress={this._showCalendar.bind(this)} style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#a4e0eb'}}>
          <Text>Clik for select date </Text>
        </TouchableHighlight>
        <Text style={{padding: 10}}>
          Selected Date: {this.state.selectedDate ? this.state.selectedDate.toDateString() : 'no date selected' }
        </Text>
       </View>
     );
   }

   _onNext(date: DateTime): void {
     this.setState({
       selectedMonth: date.addMonths(1),
     });
   }

   _onPrev(date: DateTime): void {
     this.setState({
       selectedMonth: date.addMonths(-1),
     });
   }

   _onDateSelect(date: DateTime): void {
     this.setState({
       selectedDate: date,
       isCalendarShowUp: false,
     });
   }
   _showCalendar(): void {
     this.setState({
       isCalendarShowUp: true,
     });
   }
   _onMonthsShow(value: boolean): void {
     this.setState({
       isMonthsShowing: value,
     });
   }
   _onYearsShow(value: boolean): void {
     this.setState({
       isYearsShowing: value,
     });
   }
   _onMontChange(selected: Object, isShow: boolean): void {
     let diff = selected.value - this.state.selectedMonth.getMonth();
     let newDate = this.state.selectedMonth.addMonths(diff);
     this.setState({
       selectedMonth: newDate,
       isMonthsShowing: isShow,
     });
   }
   _onYearChange(year: Object, isShow: boolean): void {
     let diff = year.value - this.state.selectedMonth.getYear();
     let month = this.state.selectedMonth.getMonth();
     let newYear = this.state.selectedMonth.getYear() + diff;
     let newDate = DateTime.fromDateParts(newYear, month, 1);
     this.setState({
       selectedMonth: newDate,
       isYearsShowing: isShow,
     });
   }
 }

AppRegistry.registerComponent('SandboxRn', () => CalendarDemo);


```

## screen cast

![calendar-demo](https://cloud.githubusercontent.com/assets/4158619/19694496/b7e41c42-9b09-11e6-8514-4c0587b089b0.gif)

## the props

```javascript

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

```

## future read

since I used [immutable-datetime](https://github.com/kodefox/immutable-datetime/blob/master/src/DateTime.js) to manage the date, just open those link to find more about API of [immutable-datetime](https://github.com/kodefox/immutable-datetime/blob/master/src/DateTime.js)
