"use strict";

const BASE_URL = "http://numbersapi.com/";
const NUM = 5;

/** Input favorite number; call API to get a fact about that number and call showFact
 */
async function getNumFact(num) { //calling it get means you are returning it 
    const resp = await axios(`${BASE_URL}${num}?json`);

    return resp.data.text;
}

/**appends resp fact to DOM */
async function showFact(num) {
    const fact = await getNumFact(num);

    $('#fav-num').append(fact); //switch so that showFact calls getNumFact

}


/** Input multiple numbers in array; call API to get facts for each number and 
 * call function showMultipleNumFacts
 */

async function getMultipleNumFacts(nums) {
    const resp = await axios(`${BASE_URL}${nums}?json`);

    console.log(resp);

    return resp.data;
}

/**appends object of JSON results to DOM */
async function showMultipleNumFacts(nums) {
    const facts = await getMultipleNumFacts(nums);

    console.log(facts);
      
    for (let fact in facts) { 
        $('#fav-nums').append(facts[fact]);
    }
}

/**Inputs one number; calls multiple requests to get multiple facts for number 
 * calls showFavNumFacts
*/
async function getAllMultipleFacts(num) {

    const promise1 = axios(`${BASE_URL}${num}?json`);
    const promise2 = axios(`${BASE_URL}${num}?json`);
    const promise3 = axios(`${BASE_URL}${num}?json`);
    const promise4 = axios(`${BASE_URL}${num}?json`);

    const results = await Promise.allSettled([promise1, promise2, promise3, promise4]);

    const facts = results.map(p => p.value.data.text);

    return facts; //map through results to get facts and send that to function to show on DOM and can reuse 

}

/**appends array of JSON results to DOM */
async function showFavNumFacts(num) {

    const facts = await getAllMultipleFacts(num);

    for (let fact of facts) {
        $("#multiple-num-facts").append(fact);
    }

}