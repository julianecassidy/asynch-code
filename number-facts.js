"use strict";

const BASE_URL = "http://numbersapi.com/";

/** Input favorite number; call API to return a fact acout that number and append
 * the fact to the page
 */
async function getNumFact(num){
    const resp = await axios(`${BASE_URL}${num}?json`);

    $('#fav-num').append(resp.data.text);
}


/** Input multiple numbers in array; call API to return facts for each number and 
 * append each fact to the page
 */

async function getMultipleNumFacts(nums){
    // const commaSepNums = nums.join(', ');
    const resp = await axios(`${BASE_URL}${nums}?json`);
    
    for (let num in resp.data){
        console.log("resp ", resp.data[num]);
        $('#fav-nums').append(resp.data[num]);
    }
}