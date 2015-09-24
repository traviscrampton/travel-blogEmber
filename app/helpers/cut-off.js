import Ember from 'ember';

export function cutOff(params/*, hash*/) {
  var content = params[0];
  if (content.length > 3){
    content = content.substring(0, 3) + "...";
  }
  debugger;
  return content;
}

export default Ember.Helper.helper(cutOff);
