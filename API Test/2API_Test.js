const url = 'https://calendarific.com/api/v2/countries';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2CGULyHyYgwEtywTFeLKqf0RoMwXYkVX',

    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

