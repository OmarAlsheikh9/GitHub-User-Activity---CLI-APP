if(process.argv.length===2){
  console.log("you should enter username for get his events");
  process.exit();
}
try{
  const userData = await fetch(`https://api.github.com/users/${process.argv[2]}/events`);
  const data = await userData.json();
  if(Array.isArray(data)&&data.length===0)// if user exist in github but doesn't have public activity
    console.log("No public activity found for this user");
  else if(Array.isArray(data)){
    data.forEach(el=>{
      if(el.type==="PushEvent")
        console.log(`Pushed ${el.payload.commits?.length ?? 'some'} commits to ${el.repo.name}`);
      else if(el.type==="IssuesEvent")
        console.log(`${el.payload.action} an issue in ${el.repo.name}`);
      else if(el.type==="WatchEvent")
        console.log(`Starred ${el.repo.name}`);
      else if(el.type==="CreateEvent")
        console.log(`Created ${el.payload.ref_type} in ${el.repo.name}`);
      else if(el.type==="MemberEvent")
        console.log(`${el.payload.action} ${el.payload.member.login} in ${el.repo.name}`);
      else
        console.log(`${el.type} in ${el.repo.name}`);
    });
  }
  else//user not exist in github so api will send object with message NOT FOUND
    console.log(data.message);
}catch(err){
  console.log(err);
}