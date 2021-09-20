export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validPhone = new RegExp('^[0-9]{10}$');
export const validPincode = new RegExp('^[1-9]{1}[0-9]{5}');
