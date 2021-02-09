(function () {

    /* TODO: this comes from a xhr, so delete */
    let images = [
        {
            title:'Scrum Masters',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit',
            imageSource:'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg',
        },
        {
            title:'Some dogs',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit',
            imageSource:'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_1280.jpg',
        },
        {
            title:'Lets do it',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit',
            imageSource:'https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_1280.jpg',
        },
        {
            title:'Tony Hinchcliff',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit',
            imageSource:'https://cdn.pixabay.com/photo/2015/07/02/10/13/sky-828648_1280.jpg',
        },
    ]



    /* vars : elements */
    const galleryContainer = document.getElementById('gallery-container');
    const previousButton = document.getElementById('gallery-previous-btn');
    const nextButton = document.getElementById('gallery-next-btn');

    /* vars : dispaying */
    const colStyles = ['','',''];
   

    /* vars : pagination */
    let totalPages = Math.ceil(images.length / 3);
    let position = 0;
    let displayedImages = images.slice(position, 3);




    /* functions */
    function paginate(array, position) {
        const itemsPerPage = 3;
        const range = 3;
        const startPosition = position * itemsPerPage;
        return array.slice( startPosition, startPosition + range)
    }

    function display() {
        displayedImages.forEach((image, i) => {
        
            // retrieving
            const galleryItem = document.createElement('my-component');
            galleryItem.imageSource = image.imageSource;
            galleryItem.modalId = image.title.toLowerCase().trim().replace(/\s+/g, '');
            galleryItem.imageTitle = image.title;
    
            // styling
            galleryItem.style.display = 'inline';
            
            if ( i == 0)
                galleryItem.classList.add('col-xl-5');
            if ( i == 1)
                galleryItem.classList.add('col-xl-3');
            if ( i == 2) 
                galleryItem.classList.add('col-xl-4');

            galleryItem.classList.add('col-lg-4');
            galleryItem.classList.add('col-md-6');
            galleryItem.classList.add('col-sm-6');
            
            galleryContainer.appendChild(galleryItem);
        });
    }



    /* callbacks */
    const previousClick = () => {

        if ( position > 0 ) {
            position--;
            displayedImages = paginate(images, position);
            galleryContainer.innerHTML = '';
            display();
        }
    }

    const nextClick = () => {
        
        if(position < totalPages-1) {
            position++;
            displayedImages = paginate(images, position);
            galleryContainer.innerHTML = '';
            display();
        }
    }


    /* event listeners */
    previousButton.addEventListener('click', previousClick);
    nextButton.addEventListener('click', nextClick);



    /* create elements */
    display();
    
}());