var models = [
    {
        name: 'BMW M4',
        image: 'img/bmw-m4.jpg',
        link: 'http://www.arabalar.com.tr/bmw/m-serisi'
    },
    {
        name: 'Audi A7',
        image: 'img/audi-a7.jpg',
        link: 'http://www.arabalar.com.tr/audi/a7'
    },
    {
        name: 'KİA SPORTAGE',
        image: 'img/kia.jpg',
        link: 'http://www.arabalar.com.tr/kia/sportage'
    },
    {
        name: 'Mercedes AMG',
        image: 'img/mercedes-amg.jpg',
        link: 'http://www.arabalar.com.tr/mercedes'
    },
    {
        name: 'Rolls Royce',
        image: 'img/rr.jpg',
        link: 'https://www.rolls-roycemotorcars.com/en_US/home.html'
    },
    {
        name: 'S60',
        image: 'img/s60.webp',
        link: 'https://www.volvocars.com/intl/cars/new-models/s60/specifications'
    }


];


var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1000',
    random: true
};



init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})
function init(settings) {
    var prev;
   interval= setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;


        } else {

            //artan index
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
       
        showSlide(index);

    }, settings.duration)
}


function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);

}






