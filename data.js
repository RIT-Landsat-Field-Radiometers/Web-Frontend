/*const mockRadiometers = [
    {id: 1, name: "Gossy Radiometer", location: "Gosnell", battery: "Good"},
    {id: 2, name: "Gleasy Radiometer", location: "Gleason", battery: "Good"},
    {id: 3, name: "Goli Radiometer", location: "Golisano", battery: "Low"},
    {id: 4, name: "Glee Radiometer", location: "Gleason Circle", battery: "Good"},
    {id: 5, name: "Sol Radiometer", location: "Sol", battery: "Low"},
];

const mockReadings = [
    {time: "08:45", temp: 42, weather: "windy"},
    {time: "10:12", temp: 25, weather: "rain"},
    {time: "14:25", temp: 28, weather: "rain"},
    {time: "18:17", temp: 30, weather: "rain"},
    {time: "19:44", temp: 16, weather: "clear"},
]*/

/*
    Remove 24h time mark in table header
    Show all temperatures for the readings (not just average)
    Use 2 sig figs for everything
    Units (temp is Celsius)
    Need a key on the side of the radiometer page that defines the ranges
    Downloads, the time needs be to be human format
    fix the hamburger menu
 */

const getRadiometersRequest = async () => {
    return fetch('http://localhost:6825/radiometer/list', {
        method: 'POST',
    })
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .catch((err) => console.log(err));
}

const getNotificationsRequest = async (radiometerId) => {
    return fetch('http://localhost:6825/radiometer/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({radiometerId}),
    })
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .catch((err) => console.log(err));
}

const getReadingsRequest = async (radiometerId) => {
    return fetch('http://localhost:6825/radiometer/readings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({radiometerId}),
    })
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .catch((err) => console.log(err));
}


export {getRadiometersRequest, getNotificationsRequest, getReadingsRequest};