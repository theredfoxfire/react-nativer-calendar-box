/*
* @flow
*/
import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

export let fontDefault = ((height * width / 1000) - 154) / 32 + 11;
export let phoneHeight = height;


let dateOuter = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: fontDefault / 3.6,
  paddingHorizontal: fontDefault / 3.4,
};

let dateInner = {
  flex: 1,
  paddingHorizontal: fontDefault / 2.3,
  paddingBottom: fontDefault / 2.3,
  justifyContent: 'center',
  alignItems: 'center',
};

export const stylesDate = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: phoneHeight / 50,
    backgroundColor: 'white',
  },

  monthContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: fontDefault * 1.1,
    backgroundColor: '#669960',
  },
  year: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 7,
  },
  yearText: {
    width: 25 / 100 * width,
  },
  month: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5,
  },
  monthText: {
    width: 25 / 100 * width,
  },
  monthSpacer: {
    width: 40 / 100 * width,
  },
  arrow: {
    justifyContent: 'center',
    borderRadius: 60,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 7,
  },
  arrowText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  calendarContainer: {
    flex: 1,
    paddingTop: fontDefault,
    paddingHorizontal: fontDefault,
    backgroundColor: '#ccd7cb',
  },
  calendarHeader: {
    flexDirection: 'row',
    marginBottom: fontDefault - 3,
  },
  dayText: {
    textAlign: 'center',
    flex: 1,
    color: '#222523',
    fontWeight: '700',
    fontSize: fontDefault,
  },
  calendarBody: {
    flexDirection: 'column',
  },
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: fontDefault * 0.3,
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateNotToday: {
    ...dateOuter,
  },
  dateToday: {
    ...dateOuter,
    borderRadius: 60,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  dot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    ...dateInner,
    paddingTop: fontDefault / 1.7,
  },
  dateText: {
    color: '#222523',
    fontSize: fontDefault + 2,
  },
  todayDateText: {
    color: '#669960',
    fontSize: fontDefault + 2,
  },

});
