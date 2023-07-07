const currentTime = new Date();

let user = {
    name: 'Mudassir',
    age : 20,
    lastSeen : new Date(),
    activity : [],
};

const updateTimePromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        user.lastSeen = new Date();
        resolve(user.lastSeen);
    },1000)
});

const firstCheckPromise =  new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let length = user.activity.length;
        user.activity.push({title:'Opened Whatsapp'});
        resolve(user.activity[length].title);
    },1000,updateTime());
});

const secondCheckPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let length = user.activity.length;
        user.activity.push({title:'Opened Chats'});
        resolve(user.activity[length].title);
        
    },1000,updateTime());
});

const deletePromise = new Promise((resolve, reject) =>{
    if(user.activity.length>0){
        setTimeout(()=>{
            let delElem = user.activity[length-1]
            user.activity.pop();
            resolve(delElem);
            updateTime();
        },1000);
    }
    else{
});
function openWhatsapp() {
    return firstCheckPromise;
};

function openChat() {
    return secondCheckPromise;
};

function updateTime (){
    return updateTimePromise
}
console.log(currentTime)
Promise.all([firstCheckPromise,secondCheckPromise]).then((date)=>{
    console.log(date[0])
    console.log(date[1])
    console.log(user.lastSeen)

})
