import {FETCH_USER} from '../actions/actiontypes'


export default function (state = null, action) {

  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}


/*
NOTES:

* Instead of just having a binary state to check whether the user is Logged in or not,
we could have three states to cover the state 
1 - still dont know whether the user is
logged in 
2- User is logged in  
3- User is not logged in

* To do this, we pass 'null' as 'default' state when the apps boots up.

* action.payload is the res object containing the googleID and userID

* In JS, '' empty string is interpreted as false.
  If we type !'' and hit enter in a JS console, its gonna output true

* So now we put a 'or' statement which says, is the action.payload contains empty string
which is nothing but false, then return the other side of the or condition which the value
'false'
  This is equivalent to 
  if(action.payload != false \\ie if action.payload has some value){
    return action.payload
  else{
    return false;
  }
  }
*/