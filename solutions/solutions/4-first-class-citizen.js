const run = (text) => {
    // BEGIN
        const takeLast = (str, count) => {
            if (str.length < count || str.length === 0) return null;
            return [...text.slice(-count)].reverse().join('');
        }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;