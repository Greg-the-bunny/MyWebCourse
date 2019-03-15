"use strict";

var hobbiesArray = [{ name: "swimming", lengthInYearsAtHobby: 20 }, { name: "hiking", lengthInYearsAtHobby: 10 }, { name: "coding", lengthInYearsAtHobby: 3 }];

function printHobbyInfo(hobby) {
    console.log(hobby.name + " enjoyed for " + hobby.lengthInYearsAtHobby + " years");
}

for (var index = 0; index < hobbiesArray.length; index++) {
    printHobbyInfo(hobbiesArray[index]);
}