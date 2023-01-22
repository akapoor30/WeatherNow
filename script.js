const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc678cc301msh7e644577205a5f0p172526jsn58498b99d7d2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}



submit.addEventListener('click', (e) => {
	e.preventDefault() // prevent the page from reloading
getWeather(city.value)// get the value of the input
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			del_cloud_pct.innerHTML = response.cloud_pct
     		del_temp.innerHTML = response.temp
     		del_feels_like.innerHTML = response.feels_like
     		del_humidity.innerHTML = response.humidity
     		del_min_temp.innerHTML = response.min_temp
     		del_max_temp.innerHTML = response.max_temp
     		del_sunset.innerHTML = response.sunset
     		del_wind_speed.innerHTML = response.wind_speed
     		del_wind_degrees.innerHTML = response.wind_degrees
     		del_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			idr_cloud_pct.innerHTML = response.cloud_pct
     		idr_temp.innerHTML = response.temp
     		idr_feels_like.innerHTML = response.feels_like
     		idr_humidity.innerHTML = response.humidity
     		idr_min_temp.innerHTML = response.min_temp
     		idr_max_temp.innerHTML = response.max_temp
     		idr_sunset.innerHTML = response.sunset
     		idr_wind_speed.innerHTML = response.wind_speed
     		idr_wind_degrees.innerHTML = response.wind_degrees
     		idr_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			bom_cloud_pct.innerHTML = response.cloud_pct
     		bom_temp.innerHTML = response.temp
     		bom_feels_like.innerHTML = response.feels_like
     		bom_humidity.innerHTML = response.humidity
     		bom_min_temp.innerHTML = response.min_temp
     		bom_max_temp.innerHTML = response.max_temp
     		bom_sunset.innerHTML = response.sunset
     		bom_wind_speed.innerHTML = response.wind_speed
     		bom_wind_degrees.innerHTML = response.wind_degrees
     		bom_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			kol_cloud_pct.innerHTML = response.cloud_pct
     		kol_temp.innerHTML = response.temp
     		kol_feels_like.innerHTML = response.feels_like
     		kol_humidity.innerHTML = response.humidity
     		kol_min_temp.innerHTML = response.min_temp
     		kol_max_temp.innerHTML = response.max_temp
     		kol_sunset.innerHTML = response.sunset
     		kol_wind_speed.innerHTML = response.wind_speed
     		kol_wind_degrees.innerHTML = response.wind_degrees
     		kol_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			kol_cloud_pct.innerHTML = response.cloud_pct
     		kol_temp.innerHTML = response.temp
     		kol_feels_like.innerHTML = response.feels_like
     		kol_humidity.innerHTML = response.humidity
     		kol_min_temp.innerHTML = response.min_temp
     		kol_max_temp.innerHTML = response.max_temp
     		kol_sunset.innerHTML = response.sunset
     		kol_wind_speed.innerHTML = response.wind_speed
     		kol_wind_degrees.innerHTML = response.wind_degrees
     		kol_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			madras_cloud_pct.innerHTML = response.cloud_pct
     		madras_temp.innerHTML = response.temp
     		madras_feels_like.innerHTML = response.feels_like
     		madras_humidity.innerHTML = response.humidity
     		madras_min_temp.innerHTML = response.min_temp
     		madras_max_temp.innerHTML = response.max_temp
     		madras_sunset.innerHTML = response.sunset
     		madras_wind_speed.innerHTML = response.wind_speed
     		madras_wind_degrees.innerHTML = response.wind_degrees
     		madras_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			lko_cloud_pct.innerHTML = response.cloud_pct
     		lko_temp.innerHTML = response.temp
     		lko_feels_like.innerHTML = response.feels_like
     		lko_humidity.innerHTML = response.humidity
     		lko_min_temp.innerHTML = response.min_temp
     		lko_max_temp.innerHTML = response.max_temp
     		lko_sunset.innerHTML = response.sunset
     		lko_wind_speed.innerHTML = response.wind_speed
     		lko_wind_degrees.innerHTML = response.wind_degrees
     		lko_sunrise.innerHTML = response.sunrise
		})
			.catch(err => console.error(err));//console.log(err)

			
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Varanasi',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			var_cloud_pct.innerHTML = response.cloud_pct
            var_temp.innerHTML = response.temp
            var_feels_like.innerHTML = response.feels_like
            var_humidity.innerHTML = response.humidity
            var_min_temp.innerHTML = response.min_temp
            var_max_temp.innerHTML = response.max_temp
            var_sunset.innerHTML = response.sunset
            var_wind_speed.innerHTML = response.wind_speed
            var_wind_degrees.innerHTML = response.wind_degrees
            var_sunrise.innerHTML = response.sunrise
		})
			.catch(err => console.error(err));//console.log(err)





