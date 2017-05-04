//var Movie = require('../models/movie');
var express = require('express');
var firebase = require('../config/firebaseapi/myfirebase')

var router = express.Router();

//TEST - used to allow access from diferent IP locations
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

	//ROUTE
	router.route('/first-data')
		
		.get(function(req, res) {

			console.log('Start: get first data');
			// Get a database reference to our occasions

			var db = firebase.database();
			var ref = db.ref('occasions');

			var layouts = ['layout0', 'layout1', 'layout2'];

			var data = { 
		    		slides: [
		          	{
		              title: '',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/cover.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: '',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		          {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		          {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          },
		           {
		              title: 'Welcome to the Docs!',
		              description: '',
		              images: [
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  },
		                  {
		                    url: 'assets/boracay.jpg',
		                    desc: ''
		                  }
		              ],
		            layout: layouts[0]
		          }
		        ]
		    };

		    data.layouts = layouts;

			res.json(data);

			// Attach an asynchronous callback to read the data at our posts reference
			// ref.on('value', function(response) {

			//   if(response.val() === null){
			//   	res.json(JSON.parse('{}'));
			//   }
			//   else{
			//   	res.json(response.val());
			//   }

			// }, function (errorObject) {
			//   console.log('The read failed: ' + errorObject.code);
			// });
		});
	

module.exports = router;