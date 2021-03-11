import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default filter values', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducers(undefined, action);
  expect(state).toEqual([]);
});

test('should set add expense', () => {
  const expense = {
    id: '4',
    description: 'Coffe',
    note: '',
    amount: 300,
    createdAt: 0,
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should remove expense', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: -1 };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const expense = {
    id: expenses[1].id,
    description: 'Coffe',
    note: '',
    amount: 300,
    createdAt: 0,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { ...expense },
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expense, expenses[2]]);
});

test('should not edit expense if id not found', () => {
  const expense = {
    id: expenses[1].id,
    description: 'Coffe',
    note: '',
    amount: 300,
    createdAt: 0,
  };
  const action = { type: 'EDIT_EXPENSE', id: -1, updates: { ...expense } };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = { type: 'SET_EXPENSES', expenses: [expenses[1]] };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
