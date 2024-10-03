function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const filteredArray = mixedArray.filter(item => typeof item === 'string');
            const lowerCaseArray = filteredArray.map(item => item.toLowerCase());
            resolve(lowerCaseArray);
        } catch (error) {
            reject(error);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));