import _ from 'lodash';

// BEGIN
const calculateAverage = (...args) => {
    if (args.length === 0) return null;

    const total = _.sum(args)
    return total/ args.length
}
export default calculateAverage
// END