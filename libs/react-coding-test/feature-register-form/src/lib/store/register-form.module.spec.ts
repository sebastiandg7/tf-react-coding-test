import {
  registerFormReducer,
  getRegisterFormStart,
  getRegisterFormFailure,
  getRegisterFormSuccess
} from './register-form.module';

describe('registerForm reducer', () => {
  it('should handle initial state', () => {
    expect(registerFormReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get registerForm actions', () => {
    let state = registerFormReducer(undefined, getRegisterFormStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = registerFormReducer(state, getRegisterFormSuccess([{ id: 1 }]));

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = registerFormReducer(state, getRegisterFormFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
