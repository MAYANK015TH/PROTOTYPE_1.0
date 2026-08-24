/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   WINDOW MANAGER v2.0
   FIXED / CONTROLLED WINDOWS
   ========================================================== */

class WindowManager {

    constructor(){

        this.zIndex = 100;

    }

    /* ======================================================
       CREATE WINDOW
       ====================================================== */

    create(options = {}){

        const windowEl =
            document.createElement("div");

        windowEl.className = "window window-enter";

        windowEl.style.zIndex =
            ++this.zIndex;

        windowEl.innerHTML = `

            <div class="window-header">

                <div class="window-title">

                    ${options.title || "Window"}

                </div>

                <button
                    class="window-close"
                    type="button"
                    aria-label="Close window">

                    ✕

                </button>

            </div>

            <div class="window-body">

                ${options.content || ""}

            </div>

        `;

        document.body.appendChild(windowEl);

        this.bind(windowEl);

        /*
         * Allow the browser to render the
         * opening state before activating it.
         */

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                windowEl.classList.remove(
                    "window-enter"
                );

                windowEl.classList.add(
                    "window-active"
                );

            });

        });

        return windowEl;

    }

    /* ======================================================
       EVENTS
       ====================================================== */

    bind(windowEl){

        /*
         * Bring active window to front.
         */

        windowEl.addEventListener(
            "mousedown",
            () => {

                windowEl.style.zIndex =
                    ++this.zIndex;

            }
        );

        /*
         * Close button.
         */

        const closeButton =
            windowEl.querySelector(
                ".window-close"
            );

        if(closeButton){

            closeButton.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    this.close(windowEl);

                }
            );

        }

    }

    /* ======================================================
       CLOSE WINDOW
       ====================================================== */

    close(windowEl){

        if(!windowEl) return;

        if(
            windowEl.classList.contains(
                "window-closing"
            )
        ){

            return;

        }

        windowEl.classList.remove(
            "window-active"
        );

        windowEl.classList.add(
            "window-closing"
        );

        /*
         * Remove after CSS animation.
         */

        windowEl.addEventListener(
            "animationend",
            () => {

                if(windowEl.parentNode){

                    windowEl.remove();

                }

            },\n            { once:true }\n        );\n\n    }\n\n}\n\n\n/* ==========================================================\n   GLOBAL WINDOW MANAGER\n   ========================================================== */\n\nconst WINDOWS =\n    new WindowManager();