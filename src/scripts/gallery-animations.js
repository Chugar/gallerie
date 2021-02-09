(function(){

    /* vars */
    const galleryBoxElements = document.getElementsByTagName('my-component');
    console.log(galleryBoxElements);

    /* callbacks */
    const animateGallery = () => {
        console.log("sitting in a cubicle")
    }

    /* event listeners */
    for (let g of galleryBoxElements) {
       g.addEventListener('mouseover', animateGallery)
    }
}());