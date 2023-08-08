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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        responsive: [
          {
              breakpoint: 1450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // variableWidth: false,
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
     $('.stock-accardion__btn').on('click', function(){
      $(this).next().slideToggle(500); 
   });
    
})


window.addEventListener('DOMContentLoaded', () => {

const tabsItem = document.querySelector('.about-tabs__item'),
        tabsBtn = document.querySelectorAll('.about-tabs__item-btn'),
       tabsContent = document.querySelectorAll('.about-tabs__content');
       
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


if(tabsItem){
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
});
}


if(tabsItem && tabsBtn && tabsContent){
  tabsHide();
  tabsShow(0);
}




//  const menu = document.querySelector('.test');
//  const mobile = document.querySelector('.nav-icon');
//  const mobBtn = document.querySelector('.mobile');

//  mobile.addEventListener('click', function(){
//      this.classList.toggle('nav-icon--active');
//      menu.classList.toggle('nav--active');
//      mobBtn.classList.toggle('visota')
//  });



 const tabsItemPersonal = document.querySelector('.personal-tabs__item'),
        tabsBtnPersonal = document.querySelectorAll('.personal-tabs__item-btn'),
       tabsContentPersonal = document.querySelectorAll('.personal-tabs__content');
       
function tabsHidePersonal() {
    tabsContentPersonal.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
    tabsBtnPersonal.forEach(btn => {
        btn.classList.remove('personal-tabs--active')
    });
}

function tabsShowPersonal(i) {
    tabsContentPersonal[i].classList.add('show');
    tabsContentPersonal[i].classList.remove('hide');
    tabsBtnPersonal[i].classList.add('personal-tabs--active');
}


if(tabsItemPersonal){
  tabsItemPersonal.addEventListener('click', (e) => {
    const target = e.target;
        if(target && target.classList.contains('personal-tabs__item-btn')){
            tabsBtnPersonal.forEach((item, i) => {
                if(target == item){
                    tabsHidePersonal();
                    tabsShowPersonal(i);
                }
            })
        }
});
}


if(tabsItemPersonal && tabsBtnPersonal && tabsContentPersonal){
  tabsHidePersonal();
  tabsShowPersonal(0);
}

//modal entry
const modal = document.querySelector('.entry-modal'),
      modalClose = document.querySelector('.entry-form__close'),
      modalBtn = document.querySelector('.entry__btn');

modalBtn.addEventListener('click', () => {
  modal.classList.add('entry-form__show');
  modal.classList.remove('entry-form__hide');
})
modalClose.addEventListener('click', () => {
  modal.classList.add('entry-form__hide');
  modal.classList.remove('entry-form__show');
})


//modal entry
const modalGarage = document.querySelector('.garage'),
      modalCloseGarage = document.querySelector('.garage__block__close'),
      modalBtnGarage = document.querySelector('.garage__button');

modalBtnGarage.addEventListener('click', () => {
  modalGarage.classList.add('entry-form__show');
  modalGarage.classList.remove('entry-form__hide');
})
modalCloseGarage.addEventListener('click', () => {
  modalGarage.classList.add('entry-form__hide');
  modalGarage.classList.remove('entry-form__show');
})

});