/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   MEMORIES SYSTEM v1.0
   ========================================================== */

class MemoriesSystem {

    constructor(){

        this.memories =
            (typeof MEMORY_DATABASE !== "undefined" &&
             Array.isArray(MEMORY_DATABASE.memories))
                ? MEMORY_DATABASE.memories
                : [];

        this.current = 0;

        this.window = null;

    }

    /* ======================================================
       OPEN
       ====================================================== */

    open(){

        this.window = WINDOWS.create({

            title:"Memories",

            content:this.layout()

        });

        this.bind();

        this.renderMemory();

    }

    /* ======================================================
       LAYOUT
       ====================================================== */

    layout(){

        return `

<div class="memories-container">

    <div class="memories-header">

        <div class="memories-title">

            MEMORY ARCHIVE

        </div>

        <div
        id="memoryCounter"
        class="memories-counter">

            0 / 0

        </div>

    </div>


    <div class="memories-content">

        <div
        id="memoryIcon"
        class="memory-icon">

            💙

        </div>

        <div
        id="memoryTitle"
        class="memory-title">

            Loading Memory...

        </div>

        <div
        id="memoryText"
        class="memory-text">

            Recovering memory data...

        </div>

    </div>


    <div class="memories-controls">

        <button
        id="memoryPrevious"
        class="primary-button">

            ◀ Previous

        </button>

        <button
        id="memoryNext"
        class="primary-button">

            Next ▶

        </button>

    </div>

</div>

`;

    }

    /* ======================================================
       EVENTS
       ====================================================== */

    bind(){

        const previous =
            this.window.querySelector(
                "#memoryPrevious"
            );

        const next =
            this.window.querySelector(
                "#memoryNext"
            );

        if(previous){

            previous.onclick = () => {

                this.previous();

            };

        }

        if(next){

            next.onclick = () => {

                this.next();

            };

        }

    }

    /* ======================================================
       RENDER MEMORY
       ====================================================== */

    renderMemory(){

        if(!this.memories.length){

            this.showEmpty();

            return;

        }

        const memory =
            this.memories[this.current];

        const icon =
            this.window.querySelector(
                "#memoryIcon"
            );

        const title =
            this.window.querySelector(
                "#memoryTitle"
            );

        const text =
            this.window.querySelector(
                "#memoryText"
            );

        const counter =
            this.window.querySelector(
                "#memoryCounter"
            );


        if(icon){

            icon.textContent =
                memory.icon || "💙";

        }


        if(title){

            title.textContent =
                memory.title ||
                `Memory ${this.current + 1}`;

        }


        if(text){

            text.innerHTML =
                memory.text ||
                memory.description ||
                "No memory description available.";

        }


        if(counter){

            counter.textContent =

                `${this.current + 1} / ${this.memories.length}`;

        }

    }

    /* ======================================================
       EMPTY STATE
       ====================================================== */

    showEmpty(){

        const title =
            this.window.querySelector(
                "#memoryTitle"
            );

        const text =
            this.window.querySelector(
                "#memoryText"
            );

        const counter =
            this.window.querySelector(
                "#memoryCounter"
            );

        if(title){

            title.textContent =
                "MEMORY DATABASE EMPTY";

        }

        if(text){

            text.innerHTML = `

                <div class="memory-empty">

                    No recovered memories
                    were found in the archive.

                    <br><br>

                    <span>
                        MEMORY STATUS:
                        <strong>EMPTY</strong>
                    </span>

                </div>

            `;

        }

        if(counter){

            counter.textContent = "0 / 0";

        }

    }

    /* ======================================================
       NEXT
       ====================================================== */

    next(){

        if(!this.memories.length){

            return;

        }

        this.current++;

        if(this.current >= this.memories.length){

            this.current = 0;

        }

        this.renderMemory();

    }

    /* ======================================================
       PREVIOUS
       ====================================================== */

    previous(){

        if(!this.memories.length){

            return;

        }

        this.current--;

        if(this.current < 0){

            this.current =
                this.memories.length - 1;

        }

        this.renderMemory();

    }

}