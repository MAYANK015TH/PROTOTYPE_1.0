/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   EFFECTS ENGINE v1.0
   ========================================================== */

class Effects {

    constructor() {

        this.cursor = null;
        this.particles = [];

    }

    /* ====================================================== */

    initialize() {

        this.createCursorGlow();

        this.createParticles();

        this.enableCardHover();

        this.enableButtonEffects();

        this.randomTerminalFlicker();

    }

    /* ======================================================
       CURSOR GLOW
       ====================================================== */

    createCursorGlow() {

        this.cursor = document.createElement("div");

        this.cursor.className = "cursor-glow";

        document.body.appendChild(this.cursor);

        document.addEventListener("mousemove", e => {

            this.cursor.style.left = e.clientX + "px";
            this.cursor.style.top = e.clientY + "px";

        });

    }

    /* ======================================================
       FLOATING PARTICLES
       ====================================================== */

    createParticles() {

        const container = document.createElement("div");

        container.className = "particle-layer";

        document.body.appendChild(container);

        for(let i=0;i<40;i++){

            const p=document.createElement("span");

            p.className="particle";

            p.style.left=Math.random()*100+"vw";

            p.style.animationDelay=
            Math.random()*10+"s";

            p.style.animationDuration=
            8+Math.random()*10+"s";

            p.style.opacity=
            .15+Math.random()*.35;

            container.appendChild(p);

        }

    }

    /* ======================================================
       CARD HOVER
       ====================================================== */

    enableCardHover(){

        document.addEventListener("mouseover",e=>{

            const card=e.target.closest(

                ".folder-card,.gallery-card,.desktop-icon"

            );

            if(!card) return;

            card.style.transform=

            "translateY(-6px) scale(1.02)";

        });

        document.addEventListener("mouseout",e=>{

            const card=e.target.closest(

                ".folder-card,.gallery-card,.desktop-icon"

            );

            if(!card) return;

            card.style.transform="";

        });

    }

    /* ======================================================
       BUTTON RIPPLE
       ====================================================== */

    enableButtonEffects(){

        document.addEventListener("click",e=>{

            const button=

            e.target.closest("button");

            if(!button) return;

            button.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(.95)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:180

            });

        });

    }

    /* ======================================================
       RANDOM SCREEN FLICKER
       ====================================================== */

    randomTerminalFlicker(){

        setInterval(()=>{

            if(Math.random()>.97){

                document.body.classList.add(

                    "screen-flicker"

                );

                setTimeout(()=>{

                    document.body.classList.remove(

                        "screen-flicker"

                    );

                },120);

            }

        },2000);

    }

}

/* ==========================================================
   GLOBAL INSTANCE
   ========================================================== */

const FX = new Effects();

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        FX.initialize();

    }

);