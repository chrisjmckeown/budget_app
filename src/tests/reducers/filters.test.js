import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const action = { type: '@@INIT' };
  const state = filtersReducers(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' };
  const state = filtersReducers(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const value = 'hello';
  const action = { type: 'SET_TEXT_FILTER', text: value };
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(value);
});

test('should set start date filter', () => {
  const value = 0;
  const action = { type: 'SET_START_DATE', startDate: value };
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(value);
});

test('should set end date filter', () => {
  const value = 0;
  const action = { type: 'SET_END_DATE', endDate: value };
  const state = filtersReducers(undefined, action);
  expect(state.endDate).toEqual(value);
});
