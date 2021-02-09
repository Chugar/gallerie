class MyComponent extends HTMLElement {

    imageSource = '';
    imageTitle = '';
    imageDesc = '';
    modalId = '';
    imageSize = '';

    showMe = () => {
        const caption = this.querySelector('.g-caption');
        const expandButton = this.querySelector('.cap-icon');

        caption.style.visibility = 'visible';
        caption.style.opacity = '1';
        expandButton.style.visibility = 'visible';
        expandButton.style.opacity = '1';

    }

    hideMe = () => {
        const caption = this.querySelector('.g-caption');
        const expandButton = this.querySelector('.cap-icon');

        caption.style.visibility = 'hidden';
        caption.style.opacity = '0';
        expandButton.style.visibility = 'hidden';
        expandButton.style.opacity = '1';
    }

    connectedCallback() {

      this.addEventListener('mouseover', this.showMe);
      this.addEventListener('mouseleave', this.hideMe);

      this.innerHTML =  /*html*/
        `<div class="${this.imageSize}">
            <div class="gallery-box">
                <div class="single-gallery">
                    
                    <div 
                        class="gallery-img" 
                        style="background-image: url(${this.imageSource});"
                    ></div>
              
                    <div class="cap-icon">
                        <a 
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#${this.modalId}"
                        ><i class="fas fa-expand"></i></a>
                    </div>

                    <div class="g-caption">
                        <h4>${this.imageTitle}</h4>
                        <p>${this.imageDesc}</p>
                    </div>
                </div>
            </div>

            <div 
                class="modal fade" 
                id="${this.modalId}" 
                tabindex="-1" role="dialog" aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
                        <span aria-hidden="true">&times;</span>
                    </button>   
                    <img width="650px" src="${this.imageSource}"/>                         
                </div>
            </div>
        </div>`;
    }
}
  
customElements.define('my-component', MyComponent);
