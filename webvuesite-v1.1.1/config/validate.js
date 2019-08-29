export function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}
export function isvalidName(str) {
  const reg = /^[\u4e00-\u9fa5]{2,7}$|^[a-zA-Z]{1,10}$/
  return reg.test(str)
}
export function isvalidCompany(str) {
  const reg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  return reg.test(str)
}
export function isvalidEmail(str) {
  const reg =  /^[a-zA-z0-9]+@[a-zA-Z0-9]+\.\w{2,3}$/
  return reg.test(str)
}
export function isvalidCode(str) {
  const reg =  /^[a-zA-Z0-9]{4}$/
  return reg.test(str)
}
