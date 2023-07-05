let activity = ['Hello'];
let lastSeen = new Date();
const userActivity= async()=>{
    const updateUserActivity = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let updatedTime= new Date();
            resolve(updatedTime);
        },1000);
    });
    const addActivity = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            activity.push('Post Added');
            updateUserActivity;
            resolve(updateUserActivity);
        })
    })
    const deleteActivity = new Promise((resolve, reject)=>{
        if(activity.length>0){
            activity.pop()
            updateUserActivity;
            resolve(updateUserActivity);
        }
        else{
            reject("No activity")
        }
    });
    let lastUpdatedTime = await addActivity;
    let t = await updateUserActivity;
    let d = await deleteActivity;

    return lastUpdatedTime;
}
userActivity().then((t)=>{
    console.log(lastSeen);
    console.log(t);
}).catch((err)=>console.log(err));