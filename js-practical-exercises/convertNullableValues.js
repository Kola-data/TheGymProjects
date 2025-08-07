const Obj = {
    name: 'John',
    age: undefined,
    city: 'New York',
    country: null
}

const convertNullableValues = (obj) => {
    for (const key in obj) {
        if (obj[key] === null) {
            obj[key] = 0;
        }
        if (obj[key] === undefined) {
            obj[key] = 'Unknown';
        }

        console.log(`${key}: ${obj[key]}`);
    }
}

convertNullableValues(Obj);