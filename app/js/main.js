$(function () {
    $('.employees-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  infinite: false
                }
              },
          ]
       
    });

    $('.about-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true
    })

    $('.confidence-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });

    $('.offer-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true, 
        infinite: false,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                variableWidth: false,
                infinite: true,
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                infinite: true,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false
              }
            }
          ]

    });


    $('.stock-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true, 
        infinite: false,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                variableWidth: false,
                infinite: true,
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                infinite: true,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false
              }
            }
          ]
    })



    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    })

    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
})


window.addEventListener('DOMContentLoaded', () => {

const tabsItem = document.querySelector('.about-tabs__item'),
        tabsBtn = document.querySelectorAll('.about-tabs__item-btn'),
       tabsContent = document.querySelectorAll('.about-tabs__content'),
       click = document.querySelectorAll('.slick-track');

function tabsHide() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
    tabsBtn.forEach(btn => {
        btn.classList.remove('tabs-active')
    });
}

function tabsShow(i) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsBtn[i].classList.add('tabs-active');
}

tabsItem.addEventListener('click', (e) => {
    const target = e.target;
        if(target && target.classList.contains('about-tabs__item-btn')){
            tabsBtn.forEach((item, i) => {
                if(target == item){
                    tabsHide();
                    tabsShow(i);
                }
            })
        }
})


tabsHide();
tabsShow(0);



});