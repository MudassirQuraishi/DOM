console.log("Person 1 Shows ticket");
console.log("Person 2 Shows ticket");

const preMovie = async()=>{
    const promiseWifeToBringTicket = new Promise ((resolve, reject) =>{
        setTimeout(()=> resolve('Ticket'),3000);
    });
    const getPopcorn= new Promise((resolve, reject) => resolve('Popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('Butter'));
    const getCoolDrink = new Promise((resolve, reject) => resolve('CoolDrink'));

    let ticket = await promiseWifeToBringTicket;

    console.log(`Wife: I have the ${ticket}`)
    console.log(`Husabnd: We shoudl go in`);
    console.log(`Wife: I am hungry`);

    let popcorn = await getPopcorn;

    console.log(`Husabnd: Here is your ${popcorn}`);
    console.log(`Husabnd: We should go in`);
    console.log(`Wife: I need some butter on it`);

    let butter = await addButter;

    console.log(`Husabnd: Here is ${butter} on your popcorn`);
    console.log(`Husabnd: We should go in`);
    console.log(`Wife: I need some cool drink`);

    let drink = await getCoolDrink;
    console.log(`Husabnd: Here is  your ${drink}`);
    console.log(`Husabnd: Anything else darling`);
    console.log(`Wife: lets go we are getting late`);
    console.log(`Husabnd: Thank you for the remainder`);

    return ticket;
}
preMovie().then((t)=>console.log(`Person 3 Shows ${t}`));
console.log("Person 4 Shows ticket");
console.log("Person 5 Shows ticket");