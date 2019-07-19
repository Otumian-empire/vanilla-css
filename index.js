/* Get all images for the individual slides */

// Images for the slide for Armani
var armaniImages = [
    'img/armani/a.JPG', 'img/armani/b.jpg', 'img/armani/c.jpg',
    'img/armani/d.jpg', 'img/armani/dice-4.png', 'img/armani/dice-5.png',
    'img/armani/dice-6.png', 'img/armani/e.png', 'img/armani/f.png',
    'img/armani/g.png', 'img/armani/menswear-belt-brown.jpg',
    'img/armani/model0.jpg', 'img/armani/model2.jpg', 'img/armani/monarch.jpg',
    'img/armani/ossu.png', 'img/armani/otumian.jpg', 'img/armani/sunglasses.jpg',
    'img/armani/watch1.jpg', 'img/armani/wrist-watch.jpg'
]

// Images for the slide for Diego
var diegoImages = [
    'img/diego/a.JPG', 'img/diego/b.jpg', 'img/diego/c.jpg',
    'img/diego/colorful-abstract-background-1084082__340.jpg',
    'img/diego/d.png', 'img/diego/drone.jpg', 'img/diego/enemy-couple.jpg',
    'img/diego/fashion-afro-american-glasses.jpg',
    'img/diego/fashion-girl-hats.jpg',
    'img/diego/friendship.jpg', 'img/diego/paramilitaryunit.jpeg',
    'img/diego/people-2590092__340.jpg', 'img/diego/people-cowbot-hats.jpg',
    'img/diego/praying.jpg', 'img/diego/pumps.jpg',
    'img/diego/watch-1120458__340.jpg', 'img/diego/woman-glasses.jpg',
    'img/diego/woman-wedding-gown.jpg', 'img/diego/wrist-watch-3650656__340.jpg'
]

// Images for the slide for William
var williamImages = [
    'img/william/clock-2752610__340.jpg',
    'img/william/close-view-nice-sport-shoe.jpg',
    'img/william/ghana.jpg', 'img/william/gloves.jpg',
    'img/william/hands-984057.jpg', 'img/william/jeans.jpg',
    'img/william/leather-shoes.jpg', 'img/william/man-312686__340.png',
    'img/william/roll-the-dice-background.jpg', 'img/william/rubyguy.png',
    'img/william/shoe-hiking.jpg', 'img/william/shoes-all-stars.jpg',
    'img/william/sky.jpg', 'img/william/socks.jpg', 'img/william/spring-bir.jpg',
    'img/william/watch.jpg', 'img/william/women_cosmetic.jpg',
    'img/william/women_jewelry.jpg', 'img/william/women_shoe.png',
    'img/william/women-red-hat.jpg'
]

/* image slide counter initialization */
var diegoSlideNumber, williamSlideNumber, armaniSlideNumber;
diegoSlideNumber = 0;
williamSlideNumber = 0;
armaniSlideNumber = 0;

/* Get all the image elements for the individual designers */
var diegoSlide, armaniSlide, williamSlide;

diegoSlide = document.getElementById('diego-slide');
armaniSlide = document.getElementById('armani-slide');
williamSlide = document.getElementById('william-slide');

setInterval(slideImages, 3000);

// slide function
function slideImages() {
    // diego slide
    if (diegoSlideNumber >= (diegoImages.length - 1)) {
        diegoSlideNumber = 0;
    } else {
        diegoSlideNumber += 1;
    }

    diegoSlide.src = diegoImages[diegoSlideNumber];

    // armani slide
    if (armaniSlideNumber >= (armaniImages.length - 1)) {
        armaniSlideNumber = 0;
    } else {
        armaniSlideNumber += 1;
    }

    armaniSlide.src = armaniImages[armaniSlideNumber];

    // william slide
    if (williamSlideNumber >= (williamImages.length - 1)) {
        williamSlideNumber = 0;
    } else {
        williamSlideNumber += 1;
    }

    williamSlide.src = williamImages[williamSlideNumber];
}

