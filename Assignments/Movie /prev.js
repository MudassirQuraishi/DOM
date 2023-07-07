let activity = ['Hello'];
let lastSeen = new Date();
const userActivity= async()=>{
    let updatedTime;
    const updateUserActivity = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            updatedTime= new Date();
            resolve(updatedTime);
        },1000);
    });
    const addActivity = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            activity.push('Post Added');
            updateUserActivity;
            resolve(updateUserActivity.then((t)=> {return t}));
        },2000)
    })
    const deleteActivity = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(activity.length>0){
            activity.pop()
            updateUserActivity;
            resolve(updateUserActivity.then((t)=>{ return t}));
        }
        else{
            reject("No activity");
        }
    },2000)
    });
    let add = await addActivity;
    let del = await deleteActivity;

    return updatedTime;
}
console.log(lastSeen)
userActivity().then((t)=>{ console.log(t) }).catch((err)=>{ console.log(err)});
