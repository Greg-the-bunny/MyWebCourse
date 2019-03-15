// let hobbiesArray = ['coding', 'swimming', 'surfing'];

// function printHobbies(passedArray)  {
//     console.log(`I Like : ${passedArray.length} things`);
//     for (let index = 0; index < passedArray.length; index++) {
//         const element = passedArray[index];
//         console.log('I like :', element);
//     }
// }

// printHobbies(hobbiesArray);

let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
// band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = {
    name : "Kooks",
    city : "Brighton" ,
    country : "England",
    yearFormed : 2004,
    genres : ["Alternative rock", "Indie rock", "post-punk revival"]
}
// band2.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

console.log('Name :', band1.name + `\n`+ `City: `, band1.city + `\n`+ `Country: `, band1.country + `\n`+ `Year Formed: `, band1.yearFormed);