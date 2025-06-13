const take = document.querySelector('.take');
const video = document.querySelector('.video1');
const video_div = document.querySelector('.video-div')
const error_msg = document.querySelector('.error');
let play = "not";
let h3 = document.querySelector('.h3');
let copy = document.querySelector('.copy');
let link = document.querySelector('.link');
let tool = document.querySelector('.tool');
const calculated = document.querySelector('.calculated');
take.addEventListener('click', () => {
  async function getUser() {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({
        audio : true,
        video : true
      })
      video_div.style.display = "inline-block";
      video.srcObject = stream;
      
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        error_msg.innerHTML = 'Please allow camera access';
        calculated.innerHTML = "";
      } else if (error.name === 'NotFoundError') {
        error_msg.innerHTML = 'Your browser did something!';
        calculated.innerHTML = "";
      } else {
        error_msg.innerHTML = `Your error: ${error.message}`;
        calculated.innerHTML = "";
      }
      
    }
    return "Viewed";
  }
  getUser();
  
  setTimeout(() => {
    video_div.style.display = "none";
    calculated.innerHTML = "You are 100% the most ugly person in the world! 🤮🤮🤮";
    tool.innerHTML = "<br><br><br><br>Tool developed by message_beast!";
    link.innerHTML = "<br><br>Share with your friends to prank them 🤣🤣🤣";
    h3.innerText = "https://gutu678.github.io/pretty_scales/";
    let h33 = h3.innerText;
    copy.style.display = "inline-block";
    copy.addEventListener('click', () => {
      navigator.clipboard.writeText(h33).then(() => {
        copy.innerHTML = 'Link copied!'
      }).catch(() => {
        alert('An error occured!');
      })
    })
  }, 30000);
  setTimeout(() => {
    calculated.innerHTML = "Calculating your much loved pretty 😍  face...";
  }, 10000);
  calculated.innerHTML = "Please be near the light to see your face clearly!";
  
    
    
  
   
  
});