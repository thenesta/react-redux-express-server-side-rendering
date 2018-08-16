import { combineReducers } from 'redux';
import { InputPass, InputHasErrored, InputIsLoading } from './createuser';

export default combineReducers({
    InputPass,
    InputHasErrored,
    InputIsLoading
});