import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 9 if no expenses', () => {
  const result = selectExpenseTotal([]);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpenseTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should correctly add up multiple expense', () => {
  const result = selectExpenseTotal(expenses);
  expect(result).toBe(114195);
});
