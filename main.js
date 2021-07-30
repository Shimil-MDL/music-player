const songImg = document.querySelector(".songImg");
const songTitle = document.querySelector(".songTitle");
const songArtist = document.querySelector(".songArtist");

const prev = document.querySelector(".fa-backward");
const play = document.querySelector(".play");
const next = document.querySelector(".fa-forward");


let i=0;
const images = ["url('./src/img/orma.jpeg')",
                "url('./src/img/click_aayi.jpeg')",
                "url('./src/img/thepp.jpeg')",
                "url('./src/img/love_story.jpeg')",
                "url('./src/img/laugh.jpeg')",
                "url('./src/img/sthuthi.jpeg')",
                "url('./src/img/dushta.jpeg')",
                "url('./src/img/birthday.jpeg')"];

const titles = ["Sorry kurach late aayi",
                "Ith Gift aane!",
                "Enna paripady?",
                "Ath ninak sheelam alle🥱",
                "Ninte purakayo🙀",
                "Shantham aavu👼",
                "Gift engne und🤗",
                "Happy Birthday 😘💝"];

const songs = [new Audio('./src/mp3/orma.mpeg'),
               new Audio('./src/mp3/click aayi.mpeg'),
               new Audio('./src/mp3/thepp.mpeg'),
               new Audio('./src/mp3/love_story.mpeg'),
               new Audio('./src/mp3/laugh.mpeg'),
               new Audio('./src/mp3/sthuthi.mpeg'),
               new Audio('./src/mp3/dushta.mpeg'),
               new Audio('./src/mp3/happy_bday.mpeg'),
                
];



prev.addEventListener('click',()=>{
    songs[i].load();
    if(i==0)
    i=7
    else
    i-=1;
    
    songImg.style.opacity = '0';
    songTitle.style.opacity = '0';
    songArtist.style.opacity = '0';
    
    setTimeout(function(){ 
        songImg.style.opacity = '1';
        songImg.style.backgroundImage = images[i];
        songTitle.style.opacity = '1';
        songTitle.textContent = titles[i];
        songArtist.style.opacity = '1';
        play.innerHTML = '<i class="far fa-play"></i>';
    }, 300);
    
});

next.addEventListener('click',()=>{
    songs[i].load();
    if(i==7)
    i=0
    else
    i+=1;
    
    songImg.style.opacity = '0';
    songTitle.style.opacity = '0';
    songArtist.style.opacity = '0';
    
    setTimeout(function(){ 
        songImg.style.opacity = '1';
        songImg.style.backgroundImage = images[i];
        songTitle.style.opacity = '1';
        songTitle.textContent = titles[i];
        songArtist.style.opacity = '1';
        play.innerHTML = '<i class="far fa-play"></i>';
    }, 300);
});

play.addEventListener('click',()=>{
    let icon = play.querySelector('i');
    if(icon.classList[1] === 'fa-play')
    {
        play.innerHTML = '<i class="far fa-pause"></i>';
        songs[i].play();
    }
    else
    {
        play.innerHTML = '<i class="far fa-play"></i>';
        songs[i].load();
    }
});
