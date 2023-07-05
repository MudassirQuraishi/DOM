console.log("Person 1 Shows ticket");
console.log("Person 2 Shows ticket");
const promiseWifeToBringTicket = new Promise ((resolve, reject) =>{
    setTimeout(()=> resolve('Ticket'),3000);
});
const getPoprcorn = promiseWifeToBringTicket.then((t) =>{
    console.log(`Wife: I have the tickets`);    
    console.log(`Husabnd: We shoudl go in`);
    console.log(`Wife: I am hungry`);
    return new Promise((resolve, reject) => resolve(`${t} poprcorn`));
});
const addButter = getPoprcorn.then((t) =>{
    console.log(`Husabnd: Here is your popcorn`);
    console.log(`Husabnd: We should go in`);
    console.log(`Wife: I need some butter on it`);
    return new Promise((resolve, reject) => resolve(`${t} butter`));
});
const getCoolDrink = addButter.then((t) => {
    console.log(`Husabnd: Here is butter on your popcorn`);
    console.log(`Husabnd: We should go in`);
    console.log(`Wife: I need some cool drink`);
    
    return new Promise((resolve, reject)=>resolve(`${t} cool drink`))
});
getCoolDrink.then((t)=> {
    console.log(`Husabnd: Here is  your cool drink`);
    console.log(`Husabnd: Anything else darling`);
    console.log(`Wife: lets go we are getting late`);
    console.log(`Husabnd: Thank you for the remainder`);
    console.log(t)})
console.log("Person 4 Shows ticket");
console.log("Person 5 Shows ticket");