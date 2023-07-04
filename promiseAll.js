
let lastTime = new Date(2000, 1, 1, 12, 5, 7)
const user =[{ title: 'FirstPost'}]

function updateLastActivityTime(){
    return new Promise((resolve, reject) => {
        lastActiveTime = new Date();
        resolve(lastActiveTime);
    });
}

function create1stPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.push({title:'Second Post'});
            resolve();
            updateLastActivityTime();
        },1000)
    })
}
function create2ndPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           user.push({title:'Third Post'});
           resolve();
           updateLastActivityTime();
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        if(user.length==0){
            reject("No Posts found")
            
        }
        else{
            setTimeout(()=>{
                user.pop(user.length-1);
                updateLastActivityTime();
                console.log(user.length)
                resolve();
                },1000);
        }
    })
}


Promise.all([updateLastActivityTime(),create1stPost()]).then((updateLastActivityTime)=>{
    console.log(`Before creating post ${lastTime}`);
    user.forEach((title) => {
        console.log(title);
    })
    console.log(`After updating post ${updateLastActivityTime}`)
})