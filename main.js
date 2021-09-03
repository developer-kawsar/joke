
//joke text

const jokeText=document.querySelector('.jokes-text');
//.new joke btn
const newjokeBtn=document.querySelector('.new-joke-btn');
const twitt=document.querySelector('.twitter-btn')
newjokeBtn.addEventListener("click",getjoke)

function getjoke(){
  fetch('https://icanhazdadjoke.com/',{
    headers:{
      'Accept' : 'application/json'
    }
  }).then(function(response){
    return response.json();
  }).then(function(data){
    const joke =data.joke;
    jokeText.innerHTML=joke;
  })
}



var complete =true;
var promp=new Promise(function(resolve,reject){
  if(complete){
    setTimeout(resolve("completed"),3000)
  }else{
    reject("rejected")
  }
})
promp.then((message)=>{
  console.log(message);
}).catch(function(message){
  console.log(message);
})

