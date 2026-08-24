/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   VIDEO ARCHIVE SYSTEM v1.0
   ========================================================== */

class VideosSystem {

    constructor() {

        this.videos =
            (typeof MEMORY_DATABASE !== "undefined" &&
             Array.isArray(MEMORY_DATABASE.videos))
                ? MEMORY_DATABASE.videos
                : [];

        this.current = 0;
        this.window = null;

    }

    /* ======================================================
       OPEN
       ====================================================== */

    open() {

        this.window = WINDOWS.create({

            title: "Videos",

            content: this.layout()

        });

        this.bind();

        this.render();

    }

    /* ======================================================
       LAYOUT
       ====================================================== */

    layout() {

        return `

<div class="videos-container">

    <div class="videos-header">

        <div class="videos-title">

            VIDEO ARCHIVE

        </div>

        <div
        id="videoCounter"
        class="videos-counter">

            0 / 0

        </div>

    </div>


    <div
    id="videoViewer"
    class="video-viewer">

        <div class="video-placeholder">

            <div class="video-icon">

                🎥

            </div>

            <div class="video-main-title">

                VIDEO ARCHIVE EMPTY

            </div>

            <div class="video-description">

                No video files have been
                added to the archive yet.

            </div>

            <div class="video-status">

                STATUS: WAITING FOR MEDIA

            </div>

        </div>

    </div>


    <div class="videos-controls">

        <button
        id="videoPrevious"
        class="primary-button">

            ◀ Previous

        </button>

        <button
        id="videoNext"
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

    bind() {

        const previous =
            this.window.querySelector(
                "#videoPrevious"
            );

        const next =
            this.window.querySelector(
                "#videoNext"
            );

        if (previous) {

            previous.onclick = () => {

                this.previous();

            };

        }

        if (next) {

            next.onclick = () => {

                this.next();

            };

        }

    }

    /* ======================================================
       RENDER
       ====================================================== */

    render() {

        if (!this.videos.length) {

            this.renderEmpty();

            return;

        }

        const video =
            this.videos[this.current];

        const viewer =
            this.window.querySelector(
                "#videoViewer"
            );

        const counter =
            this.window.querySelector(
                "#videoCounter"
            );

        if (!viewer) return;

        viewer.innerHTML = `

            <video
                class="archive-video"
                controls
                preload="metadata">

                <source
                    src="${video.video || video.src || video.file}"
                    type="video/mp4">

                Your browser does not support
                video playback.

            </video>

            <div class="video-caption">

                ${video.title || "Untitled Video"}

            </div>

        `;

        if (counter) {

            counter.textContent =

                `${this.current + 1} / ${this.videos.length}`;

        }

    }

    /* ======================================================
       EMPTY STATE
       ====================================================== */

    renderEmpty() {

        const counter =
            this.window.querySelector(
                "#videoCounter"
            );

        if (counter) {

            counter.textContent = "0 / 0";

        }

    }

    /* ======================================================
       NEXT
       ====================================================== */

    next() {

        if (!this.videos.length) return;

        this.current++;

        if (
            this.current >=
            this.videos.length
        ) {

            this.current = 0;

        }

        this.render();

    }

    /* ======================================================
       PREVIOUS
       ====================================================== */

    previous() {

        if (!this.videos.length) return;

        this.current--;

        if (this.current < 0) {

            this.current =
                this.videos.length - 1;

        }

        this.render();

    }

}