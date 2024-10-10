const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '948c9f9febmsh32218e289f31c3bp184ae8jsnf2a39278dd81',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

/* // FIRST WAY:- TRY-CATCH
console.log("start");
async function handlePromise(){

    try{

        const start = Date.now();

        const res = await fetch(API_URL);
        
        console.log(Date.now() - start);
        
        const data = await res.json();
        
        console.log(data);

    }catch(err){
        console.log("ERROR handled:-", err);
    }
}
handlePromise();
console.log("end");
*/

// Second Way:- .catch() method
/*
*/
async function fetchData(){
    const res = await fetch(url, options);

    const data = await res.json();
   
    return data;
}

fetchData()
.then((data)=> console.log(data))
.catch((err)=> console.log("ERROR caught:- ", err));


