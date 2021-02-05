import axios from "axios";
import { FETCH_USER } from "./actiontypes";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};


/*
* Here the fetchUser is an action creator which returns a function which is having 
'dispatch' as an arguement.
* This function performs an AJAX request which is an async action and then when the AJAX
req is done, it returns a promise, which is nothing but an object inside the 'res' payload
* This object is then sent into all the reducers by 'dispatch' function
*/