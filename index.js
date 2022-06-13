
gsap.registerPlugin(ScrollTrigger)




// //timeline to animate content in the header section as long as reveal the div with class of animation which is initially hidden
// let heroTimeline = gsap.timeline()

// heroTimeline.to('.animations',{opacity:1,duration:2,clipPath:'circle(70.7% at 50% 50%)'})
//         .from('.hero-header, .hero-text, .cta, .join-text, .hero-members',{opacity:0,duration:1,y:43},'<')
//         .from('.desktopImg',{y:43,duration:2,ease:'back.easeOut'},'<')
// // gsap.to('.animations',{opacity:1,duration:3,clipPath:'circle(70.7% at 50% 50%)'})


// //selecting the burger
// const hamburger = document.querySelector('.hamburger')

// //selecting the navbar
// const navbar = document.querySelector('.navbar')


// //hamburger on click
// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('clicked')
//     navbar.classList.toggle('active')

//     if(navbar.classList.contains('active')){
//         document.body.classList.add('overflowHidden') //adding a class that will  disable scrolling when the links are shown

//     }

//     else{
//         document.body.classList.remove('overflowHidden')
//     }

// })




// // timeline for the features section
// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.features-container',
//         markers:true,
//         start:'top center',
//         scrub:1,
//         // toggleActions:'play reset reset none'

//     }
// })

// tl.from('.feature-one',{y:34})
//   .from('.feature-two',{y:34},'<')
//   .from('.feature-three',{y:34},'<')
//   .from('.feature-four',{y:34},'<')












//REVIEW SECTION


// const reviews = [
//     {
//         image:'images/userAvatar04.svg',
//         text:'I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.',
//         name:'@peterJohn'

//     },
//     {
//         image:'images/userAvatar02.svg',
//         text:'Absolutely love everything about Chirp, from the design to how everything works smoothly.',
//         name:'@Jessica Mays'
//     },
//     {
//         image:'images/userAvatar06.svg',
//         text:"I just tried out @chirp and it's amazing. love all the analytics I can see.",
//         name:'@Alex Smith',
//     },
//     {
//         image:'images/userAvatar08.svg',
//         text:"This is just sooo great",
//         name:"@Juliet Henberg"
//     }
// ]

// //selecting the next and prev arrows in the review section
// const nextBtn = document.querySelector('#rightBtn')
// const prevBtn = document.querySelector('#leftBtn')


// //the contents of the reviews section
// const reviewImage = document.querySelector('.reviewImage')
// const reviewText = document.querySelector('.review-text')
// const reviewName = document.querySelector('.review-name')




// reviewIndex = 0


// prevBtn.addEventListener('click',()=>{
//     reviewIndex--

//     if(reviewIndex<0){  
//         reviewIndex = reviews.length-1
//     }

//     showReview(reviewIndex)



// })

// nextBtn.addEventListener('click',()=>{
//     reviewIndex++

//     if(reviewIndex>reviews.length-1){
//         reviewIndex=0
//     }


//     showReview(reviewIndex)


// })

// //function to change the review when the buttons are clicked
// function showReview(reviewIndex){

//     let currentReview = reviews[reviewIndex]

//     reviewImage.src = currentReview.image
//     reviewText.textContent = currentReview.text
//     reviewName.textContent = currentReview.name
// }



function everthingReview(){

    //array containing the reviews
    const reviews = [
        {
            image:'images/userAvatar04.svg',
            text:'I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.',
            name:'@peterJohn'
    
        },
        {
            image:'images/userAvatar02.svg',
            text:'Absolutely love everything about Chirp, from the design to how everything works smoothly.',
            name:'@Jessica Mays'
        },
        {
            image:'images/userAvatar06.svg',
            text:"I just tried out @chirp and it's amazing. love all the analytics I can see.Makes it really easy to connect with others",
            name:'@Alex Smith',
        },
        {
            image:'images/userAvatar08.svg',
            text:"This is just sooo cool.I love all the themes that are availble,with just a single tap.Looks great",
            name:"@Juliet Henberg"
        }
    ]
    
    //selecting the next and prev arrows in the review section
    const nextBtn = document.querySelector('#rightBtn')
    const prevBtn = document.querySelector('#leftBtn')
    
    
    //the contents of the reviews section
    const reviewImage = document.querySelector('.reviewImage')
    const reviewText = document.querySelector('.review-text')
    const reviewName = document.querySelector('.review-name')
    
    
    
    
    reviewIndex = 0
    
    
    prevBtn.addEventListener('click',()=>{
        reviewIndex--
    
        if(reviewIndex<0){  
            reviewIndex = reviews.length-1
        }
    
        showReview(reviewIndex)
    
    
    
    })
    
    nextBtn.addEventListener('click',()=>{
        reviewIndex++
    
        if(reviewIndex>reviews.length-1){
            reviewIndex=0
        }
    
    
        showReview(reviewIndex)
    
    
    })
    
    //function to change the review when the buttons are clicked
    function showReview(reviewIndex){
    
        let currentReview = reviews[reviewIndex]
    
        reviewImage.src = currentReview.image
        reviewText.textContent = currentReview.text
        reviewName.textContent = currentReview.name
    }

}

function everthingAnimation(){

    //timeline for the list irems with class menu-links
    //this tl will only play when the nevbar is visible
    //hence it is initially paused

    let linkTimeline= gsap.timeline({paused:true})

    linkTimeline.from('.menu-links',{x:-44,stagger:.1})





    //timeline to animate content in the header section as long as reveal the div with class of animation which is initially hidden
    let heroTimeline = gsap.timeline()

    heroTimeline.to('.animations',{opacity:1,duration:2,clipPath:'circle(70.7% at 50% 50%)'})
            .from('.hero-header, .hero-text, .cta, .join-text, .hero-members',{opacity:0,duration:1,y:43},'<')
            .from('.desktopImg',{y:43,duration:2,ease:'back.easeOut'},'<')
    // gsap.to('.animations',{opacity:1,duration:3,clipPath:'circle(70.7% at 50% 50%)'})


    //selecting the burger
    const hamburger = document.querySelector('.hamburger')

    //selecting the navbar
    const navbar = document.querySelector('.navbar')


    //hamburger on click
    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('clicked')
        navbar.classList.toggle('active')

        if(navbar.classList.contains('active')){
            document.body.classList.add('overflowHidden') 
            //adding a class that will  disable scrolling when the links are shown
            linkTimeline.play() //play the animation for the link-menu only when the navbar is visible
        }

        else{
            document.body.classList.remove('overflowHidden')
            linkTimeline.reverse()  //reverse the timeline
        }


    })




    // timeline for the features section
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.features-container',
            // markers:true,
            start:'top center',
            scrub:1,
            // toggleActions:'play reset reset none'

        }
    })

    tl.from('.feature-one',{y:44})
    .from('.feature-two',{y:44},'<')
    .from('.feature-three',{y:44},'<')
    .from('.feature-four',{y:44},'<')




// ANIMATION FOR WHEN THE LINKS ARE HOVERED ON


    //selecting the list items with class of menu-links
    const menuLink = document.querySelectorAll('.menu-links')


    //animating each div to show when  a link is hovered on
    menuLink.forEach(element=>{
        let tl = gsap.timeline({paused:true})  //putting this timeline inside is essential
                                                //dont put it outside of this for each function


        //the small circle in each div will cover the whole area of the div with this timeline
        tl.to(element.querySelector('.black'),{duration:.2,clipPath:' circle(70.7% at 50% 50%)',ease:'none'})

        //event listener for each element 
        element.addEventListener('mouseenter',()=>{

            tl.play()
            element.classList.add('changeLinkColor')  //giving the links the class active when hovered on
                                            //the class is styled in the css
            
        })

        element.addEventListener('mouseleave',()=>{


            tl.reverse()
            element.classList.remove('changeLinkColor')
            //removing the class active when no longer hovering
        
        })

    })

}








window.addEventListener('load',()=>{
    everthingAnimation()
    everthingReview()

})





