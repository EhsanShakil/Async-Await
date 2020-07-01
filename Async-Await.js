//	1. The word “async” before a function means one simple thing: 
//	a function always returns a promise. 

//	2. The keyword "await" makes JavaScript wait until that promise 
//	settles and returns its result.

/*********************************************************************/

var promise = new Promise((resolve, reject) => { 
  let number = 2; 
  if(number === 2) { 
    	resolve("Success"); 
  } else { 
    	reject("Failed"); 
  }
});

async function _async() {
	let data = await promise
	console.log(data)
}

_async()

/*********************************************************************/

const random = () => {
	let promise = new Promise((resolve, reject) => {
		let number = Math.floor(Math.random() * 10)
		if (number % 2) {
			resolve("Success")
		} 
		else{
			reject("Unknown Error")
		}
	})
	return promise
}

const data = async () => {
	try{
		let numberdata = await random()
		console.log(numberdata)
	}
	catch(error){
		console.log("Found", error)
	}
}

data()

/*********************************************************************/
