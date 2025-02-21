            
// swiper
            const swiper = new Swiper('.swiper', {
            slidesPerView: 4, 
            spaceBetween: 20, 
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: {
              delay: 2000, 
              disableOnInteraction: false,
            },
            breakpoints: {
              220: {
                slidesPerView: 1, 
                spaceBetween: 10,
              },
              570: {
                slidesPerView: 2, 
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4, 
                spaceBetween: 20,
              },
            },
          });

// gallery

     let lightbox=document.getElementById('lightbox')
    let lightboxImage=document.getElementById('lightboxImage')

    function OpenBox(index){
        let image=document.getElementsByClassName('image')

        lightbox.style.display='flex'
        lightboxImage.src=image[index].src.replace('270x360','270x360')

    }

    function CloseBox(){
        lightbox.style.display='none'
    }


// swiper in single class page
        window.addEventListener("load", function() {
            let images = document.querySelectorAll("#classes .class");
            let index = 0;

            setInterval(() => {
                images[index].style.display = "none";
                index = (index + 1) % images.length;
                images[index].style.display = "block";
            }, 3000); 
        });
       

// form validation

 function validateForm()
  {
    let isValid=true

    document.getElementById('nameError').textContent=''
    document.getElementById('emailError').textContent=''
    document.getElementById('classError').textContent=''
    document.getElementById('msgError').textContent=''


    let name=document.getElementById('name').value
    if(name === '')
    {
      document.getElementById('nameError').textContent="Enter a name"
      isValid=false
    }

    let email=document.getElementById('email').value
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '')
    {
      document.getElementById('emailError').textContent="Enter  a Email"
      isValid=false
    }
    else if(!emailPattern.test(email))
    {
      document.getElementById('emailError').textContent="Enter the email Format"
      isValid=false
    }

    let classes=document.getElementById('classes').value
    if(classes === '')
    {
      document.getElementById('classError').textContent="Enter a classes"
      isValid=false
    }

    let msg=document.getElementById('msg').value
    if(msg === '')
    {
      document.getElementById('msgError').textContent="Enter a message"
      isValid=false
    }

    let submit=document.getElementById('submit').value
    if(name !== '' && email !== '' && classes !== '' && msg !== '' )
    {
      alert('Form Submitted SuccessFully.')
      isValid=true
    }

    return isValid
  }



  // slider image

let CurrentSlider=0
ShowSlider(CurrentSlider)
let clearInterval=setInterval(automoveslide,2000)

function ShowSlider(index){
    let slides=document.getElementsByClassName('slides')

    if(index>=slides.length){
        CurrentSlider=0
    }
    else if(index<0){
        CurrentSlider=slides.length-1
    }
    else{
        CurrentSlider=index
    }

     for(i=0;i<slides.length;i++){
        slides[i].style.display='none'
    }
    slides[CurrentSlider].style.display='block'
}

function automoveslide(){
    ShowSlider(CurrentSlider + 1)
}



// animation

new WOW().init();