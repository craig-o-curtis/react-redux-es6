import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

/* AUTHOR THUNK */
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}
export function loadAuthorsError(error) {
  return { type : types.LOAD_AUTHORS_ERROR, error };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        dispatch(loadAuthorsError(error));
        throw(error);
      });
  };
}
