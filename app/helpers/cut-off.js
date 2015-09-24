import Ember from 'ember';

export function cutOff(params/*, hash*/) {
  if (blog.content[0].length > 3){
    params = params.substr(0, 3) + "...";
  }
  return params;
}

export default Ember.Helper.helper(cutOff);
