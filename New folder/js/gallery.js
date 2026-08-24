/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   GALLERY SYSTEM v1.0
   ========================================================== */

class GallerySystem {

    constructor(){

        this.images =
            MEMORY_DATABASE.gallery;

        this.current = 0;

        this.window = null;

    }

    /* ======================================================
       OPEN
       ====================================================== */

    open(){

        this.window = WINDOWS.create({

            title:"Funny Images",

            content:this.layout()

        });

        this.bind();

        this.renderImage();

    }

    /* ======================================================
       LAYOUT
       ====================================================== */

    layout(){

        return `

<div class="gallery-container">

<div class="gallery-image">

<img
id="galleryPreview"
src=""
alt="">

</div>

<div class="gallery-sidebar">

<div class="gallery-title">

PHOTO INFORMATION

</div>

<div
id="galleryCaption"
class="gallery-caption">

...

</div>

<div class="gallery-buttons">

<button
id="galleryPrev"
class="primary-button">

◀ Previous

</button>

<button
id="galleryNext"
class="primary-button">

Next ▶

</button>

</div>

</div>

</div>

`;

    }

    /* ======================================================
       EVENTS
       ====================================================== */

    bind(){

        this.window
        .querySelector("#galleryPrev")
        .onclick=()=>{

            this.previous();

        };

        this.window
        .querySelector("#galleryNext")
        .onclick=()=>{

            this.next();

        };

    }

    /* ======================================================
       RENDER IMAGE
       ====================================================== */

    renderImage(){

        const img =
        this.window.querySelector(
            "#galleryPreview"
        );

        const cap =
        this.window.querySelector(
            "#galleryCaption"
        );

        img.src =
        this.images[this.current].image;

        cap.innerHTML =

`<strong>Caption</strong><br><br>

${this.images[this.current].caption}

<br><br>

<hr>

<br>

Recovered Image

${this.current+1}

of

${this.images.length}`;

    }

    /* ======================================================
       NEXT
       ====================================================== */

    next(){

        this.current++;

        if(this.current>=this.images.length){

            this.current=0;

        }

        this.renderImage();

    }

    /* ======================================================
       PREVIOUS
       ====================================================== */

    previous(){

        this.current--;

        if(this.current<0){

            this.current=

            this.images.length-1;

        }

        this.renderImage();

    }

}