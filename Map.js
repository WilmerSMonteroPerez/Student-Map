
async function run(){
    const locations = await getBuslocations();
    console.log(new Date());
    console.log(locations);

    // timer
    setTimeout(run, 15000);

}
    
async function getBuslocations(){
    const url ='https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}

run();

