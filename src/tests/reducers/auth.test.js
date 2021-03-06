import authReducers from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123',
  };
  const state = authReducers({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducers({ uid: '123' }, action);
  expect(state.uid).toEqual(undefined);
});
