/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   DESKTOP SYSTEM v3.1
   FIXED / POLISHED DESKTOP
   ========================================================== */

class DesktopSystem {

    constructor() {

        this.app = document.getElementById("app");

        this.desktop = null;

    }


    /* ======================================================
       INITIALIZE
       ====================================================== */

    initialize() {

        this.render();

        this.bindEvents();

        this.animateIcons();

    }


    /* ======================================================
       DESKTOP LAYOUT
       ====================================================== */

    render() {

        this.app.innerHTML = `

            <div class="desktop">

                <div class="desktop-header">

                    <div class="desktop-system">

                        IMPORTANT-P1

                    </div>

                    <div class="desktop-status">

                        <span class="status-dot"></span>

                        SYSTEM ONLINE

                    </div>

                </div>


                <div class="desktop-icons">

                    <div
                        class="desktop-icon"
                        data-app="gallery"
                        tabindex="0">

                        <div class="desktop-icon-image">

                            🖼️

                        </div>

                        <div class="desktop-icon-label">

                            Funny Images

                        </div>

                    </div>


                    <div
                        class="desktop-icon"
                        data-app="notes"
                        tabindex="0">

                        <div class="desktop-icon-image">

                            📝

                        </div>

                        <div class="desktop-icon-label">

                            Recovered Notes

                        </div>

                    </div>


                    <div
                        class="desktop-icon"
                        data-app="memories"
                        tabindex="0">

                        <div class="desktop-icon-image">

                            💙

                        </div>

                        <div class="desktop-icon-label">

                            Memories

                        </div>

                    </div>


                    <div
                        class="desktop-icon"
                        data-app="videos"
                        tabindex="0">

                        <div class="desktop-icon-image">

                            🎥

                        </div>

                        <div class="desktop-icon-label">

                            Videos

                        </div>

                    </div>


                    <div
                        class="desktop-icon classified-icon"
                        data-app="classified"
                        tabindex="0">

                        <div class="desktop-icon-image">

                            🔒

                        </div>

                        <div class="desktop-icon-label">

                            Classified

                        </div>

                    </div>

                </div>


                <div class="desktop-footer">

                    <span>

                        SECURE ENVIRONMENT

                    </span>

                    <span>

                        IMPORTANT-P1

                    </span>

                </div>

            </div>

        `;

        this.desktop =
            this.app.querySelector(".desktop");

    }


    /* ======================================================
       ICON ANIMATION
       ====================================================== */

    animateIcons() {

        const icons =
            this.app.querySelectorAll(
                ".desktop-icon"
            );

        icons.forEach((icon, index) => {

            icon.style.setProperty(
                "--icon-delay",
                `${index * 90}ms`
            );

            requestAnimationFrame(() => {

                icon.classList.add(
                    "icon-visible"
                );

            });

        });

    }


    /* ======================================================
       EVENTS
       ====================================================== */

    bindEvents() {

        const icons =
            this.app.querySelectorAll(
                ".desktop-icon"
            );


        icons.forEach(icon => {


            /* ----------------------------------------------
               SINGLE CLICK
               ---------------------------------------------- */

            icon.addEventListener(
                "click",
                () => {

                    icons.forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });

                    icon.classList.add(
                        "selected"
                    );

                }
            );


            /* ----------------------------------------------
               DOUBLE CLICK
               ---------------------------------------------- */

            icon.addEventListener(
                "dblclick",
                () => {

                    /*
                     * Small launch animation.
                     */

                    icon.classList.add(
                        "launching"
                    );


                    setTimeout(() => {

                        icon.classList.remove(
                            "launching"
                        );

                        this.openApp(
                            icon.dataset.app
                        );

                    }, 180);

                }
            );


            /* ----------------------------------------------
               KEYBOARD ACCESS
               ---------------------------------------------- */

            icon.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        icon.classList.add(
                            "launching"
                        );

                        setTimeout(() => {

                            icon.classList.remove(
                                "launching"
                            );

                            this.openApp(
                                icon.dataset.app
                            );

                        }, 180);

                    }

                }
            );

        });

    }


    /* ======================================================
       OPEN APPLICATION
       ====================================================== */

    openApp(app) {

        switch(app) {


            /* ==============================================
               GALLERY
               ============================================== */

            case "gallery":

                if (
                    typeof GallerySystem ===
                    "function"
                ) {

                    new GallerySystem().open();

                } else {

                    console.error(
                        "GallerySystem is not loaded."
                    );

                }

                break;


            /* ==============================================
               NOTES
               ============================================== */

            case "notes":

                if (
                    typeof NotesSystem ===
                    "function"
                ) {

                    new NotesSystem().open();

                } else {

                    console.error(
                        "NotesSystem is not loaded."
                    );

                }

                break;


            /* ==============================================
               MEMORIES
               ============================================== */

            case "memories":

                if (
                    typeof MemoriesSystem ===
                    "function"
                ) {

                    new MemoriesSystem().open();

                } else {

                    console.error(
                        "MemoriesSystem is not loaded."
                    );

                }

                break;


            /* ==============================================
               VIDEOS
               ============================================== */

            case "videos":

                if (
                    typeof VideosSystem ===
                    "function"
                ) {

                    new VideosSystem().open();

                } else {

                    console.error(
                        "VideosSystem is not loaded."
                    );

                }

                break;


            /* ==============================================
               CLASSIFIED
               ============================================== */

            case "classified":

                if (
                    typeof SecretSystem ===
                    "function"
                ) {

                    new SecretSystem().open();

                } else {

                    console.error(
                        "SecretSystem is not loaded."
                    );

                }

                break;


            /* ==============================================
               UNKNOWN
               ============================================== */

            default:

                console.warn(
                    "Unknown desktop application:",
                    app
                );

                break;

        }

    }

}


/* ==========================================================
   START DESKTOP
   ========================================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        window.DESKTOP =
            new DesktopSystem();

        window.DESKTOP.initialize();

    }
);