

		$.ajax({

		type: 'GET',
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat',
		success: function(data) { printGif(data);}
		// error: function(data) { console.log('nope.')},
		// complete: function(data)  { console.log('yay!')},

		});

		function printGif(data) {
			var imageSource = `<img src = ${data.data.image_url}  alt= 'GifGif'>`;
			debugger;
			$('#gif').html(imageSource);
		};


		// $.ajax({

		// type: 'GET',
		// url: 'http://api.openweathermap.org/data/2.5/weather?q=Gdynia&mode=html&APPID=f51f44292a95482bac1b8bf0900f4b63',
		// success: function(data) { $('#weather').html(data)}
		// // error: function(data) { console.log('nope.')},
		// // complete: function(data)  { console.log('yay!')},

		// });

		// // function printGif(data) {
		// // 	var imageSource = `<img src = ${data.data.image_url}  alt= 'Weather'>`;
		// // 	debugger;
		// // 	$('#weather').html(imageSource);
		// // };

		

