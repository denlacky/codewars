//DESCRIPTION:
//1."This white dog has 4 legs."
//2."This red cock has 2 legs."
//3."This gray rabbit has 4 legs."


// const obj=[
//     {name:'dog ',legs:'4 ', color:'white ' },
//     {name:'cock ',legs:'2 ', color:'red ' },
//     {name:'rabbit ',legs:'4 ', color:'gray ' }
// ]
// function animalDog(){
//     return 'This ' + obj[0].color + obj[0].name + 'has ' + obj[0].legs  + 'legs.'
// }
// function animalCock(){
//     return 'This ' + obj[1].color + obj[1].name + 'has ' + obj[1].legs  + 'legs.'
// }
// function animalRabbit(){
//     return 'This ' + obj[2].color + obj[2].name + 'has ' + obj[2].legs  + 'legs.'
// }
function animal(obj) {
    obj={name:'dog ',legs:'4 ', color:'white '}
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal())
// console.log(animalDog())
// console.log(animalCock())
// console.log(animalRabbit())
