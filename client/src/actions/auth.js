import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";
//ACTION CREATORS

export const signUp = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);

      dispatch({ type: AUTH, data })

      history.push('/');

    } catch (error) {
      console.log({ error });
    }
};

export const signIn = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });
      
      history.push('/');

    } catch (error) {
      console.log({ error });
    }
};