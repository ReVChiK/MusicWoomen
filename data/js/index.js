function Music_Player(){
    const player_btn_play = document.querySelectorAll('.play'),
          player_btn_pause = document.querySelectorAll('.pause'),
          audio = document.querySelectorAll('.audio'),
          progressContainer = document.querySelectorAll('.player-progress__container'),
          progressBar = document.querySelectorAll('.progress');
        
    for(let i = 0; i < player_btn_play.length; i++){
        player_btn_play[i].addEventListener('click', ()=>{
            player_btn_play[i].classList.replace('active', 'hidden');
            player_btn_pause[i].classList.replace('hidden', 'active');
            audio[i].loop = true;
            audio[i].play();
        })
    }

    for(let j = 0; j < player_btn_pause.length; j++){
        player_btn_pause[j].addEventListener('click', ()=>{
            player_btn_pause[j].classList.replace('active', 'hidden');
            player_btn_play[j].classList.replace('hidden', 'active');
            audio[j].pause();
        })
    }

    for(let k = 0; k < audio.length; k++){
        audio[k].addEventListener('timeupdate', (e)=>{
            const {duration, currentTime} = e.srcElement;
            const ProgressPercent = (currentTime / duration) * 100;
            progressBar[k].style.width = `${ProgressPercent}%`;
        })
    }

    for(let l = 0; l < progressContainer.length; l++){
        progressContainer[l].addEventListener('click', function(event){
            const width = progressContainer[l].clientWidth;
            const clickX = event.offsetX;
            const duration = audio[l].duration;
            audio[l].currentTime = (clickX / width) * duration;
        });
    }
}

function Show_Images(){
    let index = 0;
    let index_img = 4;
    const image_array = ['IOw_OUhRuyc.jpg', '2b4f_-gZWnQ.jpg', 
                         'pmEOzyAYo3Q.jpg', 'ucHe1gLPlYs.jpg', 
                         'PQh7xXCE9EY.jpg', 'EZZRkoh8bec.jpg',
                         '5wuouKNXpww.jpg', '57W8LozrdZc.jpg',
                         'F2atP9hssck.jpg', 'aqOEi6d0HjA.jpg',
                         'HPkXNuujOeg.jpg', 'Z02wEFPvPVM.jpg',
                         '1KmuBgOrc7s.jpg', 'CZMH1RrWs3Y.jpg'];


    const images = document.querySelectorAll('.art-img');
    const art_btn = document.querySelector('.art-btn');

    art_btn.addEventListener('click', ()=>{
        for(let i = 0; i < images.length; i++){
            images[index_img].src = './CSS/images/works/' + image_array[index];
            images[index_img].classList.replace('hidden', 'active');
            images[index_img + 1].src = './CSS/images/works/' + image_array[index + 1];
            images[index_img + 1].classList.replace('hidden', 'active');
        }

        index++;
        index_img++;

        if(index_img == 17){
            art_btn.style.display = 'none';
        }
    });
}


Music_Player();

Show_Images();


