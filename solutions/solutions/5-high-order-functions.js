import _ from 'lodash';

// BEGIN
const takeOldest = (arr, count = 1) => {
    let newArr = arr.sort((A, B) => Date.parse(A.birthday) - Date.parse(B.birthday));
    return newArr.slice(0, count);
}
export default takeOldest
// END