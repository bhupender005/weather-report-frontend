const dummyResponse = {
	"location": {
		"city": "Sunnyvale",
		"region": " CA",
		"woeid": 2502265,
		"country": "United States",
		"lat": 37.371609,
		"long": -122.038254,
		"timezone_id": "America/Los_Angeles"
	},
	"current_observation": {
		"wind": {
			"chill": 47,
			"direction": 335,
			"speed": 2.49
		},
		"atmosphere": {
			"humidity": 89,
			"visibility": 10.0,
			"pressure": 29.59,
			"rising": 0
		},
		"astronomy": {
			"sunrise": "6:45 am",
			"sunset": "7:36 pm"
		},
		"condition": {
			"text": "Rain",
			"code": 12,
			"temperature": 47
		},
		"pubDate": 1586192400
	},
	"forecasts": [{
		"day": "Mon",
		"date": 1586156400,
		"low": 42,
		"high": 53,
		"text": "Rain",
		"code": 12
	}, {
		"day": "Tue",
		"date": 1586242800,
		"low": 43,
		"high": 59,
		"text": "Scattered Showers",
		"code": 39
	}, {
		"day": "Wed",
		"date": 1586329200,
		"low": 46,
		"high": 64,
		"text": "Partly Cloudy",
		"code": 30
	}, {
		"day": "Thu",
		"date": 1586415600,
		"low": 49,
		"high": 65,
		"text": "Mostly Cloudy",
		"code": 28
	}, {
		"day": "Fri",
		"date": 1586502000,
		"low": 50,
		"high": 65,
		"text": "Partly Cloudy",
		"code": 30
	}]
}

const fetchWeatherForCityDummy = city => dummyResponse;

const fetchWeatherForCity = city => new Promise(resolve => {
	fetch('http://localhost:3030/getForcastFor', {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({city})
	  }).then(function(response) {
		resolve(response.json());
	  });
});

export {
	fetchWeatherForCity,
	fetchWeatherForCityDummy
}