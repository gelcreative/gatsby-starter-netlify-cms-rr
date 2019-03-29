function removeProperty(obj, prop) {
  Object.keys(obj).forEach(key => {
    if(key === prop) {
      delete obj[key];
      return true;
    } 
    return false;
  })
}