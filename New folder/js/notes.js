/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   NOTES SYSTEM
   WINDOW VERSION
   ========================================================== */

class NotesSystem {

    constructor() {

        this.notes = [

            {
                title: "Recovered_Note_01",
                date: "Unknown",
                text: "Replace this with your first note."
            },

            {
                title: "Recovered_Note_02",
                date: "Unknown",
                text: "Replace this with another memory."
            },

            {
                title: "Recovered_Note_03",
                date: "Unknown",
                text: "Write something funny here."
            },

            {
                title: "Recovered_Note_04",
                date: "Unknown",
                text: "A wholesome memory goes here."
            }

        ];

        this.window = null;

    }


    /* ======================================================
       OPEN NOTES WINDOW
       ====================================================== */

    open() {

        this.window = WINDOWS.create({

            title: "Recovered Notes",

            content: `

                <div class="notes-container">

                    <div class="notes-header">

                        <div>

                            <h1 class="blue-glow">
                                Recovered Notes
                            </h1>

                            <p>
                                Encrypted personal records
                            </p>

                        </div>

                        <button
                            class="primary-button"
                            id="notesBack">

                            ← Back

                        </button>

                    </div>


                    <div class="notes-main">

                        <div
                            class="notes-sidebar"
                            id="notesSidebar">

                        </div>


                        <div class="notes-viewer">

                            <h2 id="noteTitle">

                                Select a Note

                            </h2>

                            <p id="noteDate"></p>

                            <div
                                id="noteContent"
                                class="note-content">

                                Choose any recovered note.

                            </div>

                        </div>

                    </div>

                </div>

            `

        });


        this.bind();

        this.renderSidebar();

    }


    /* ======================================================
       BIND EVENTS
       ====================================================== */

    bind() {

        if (!this.window) return;


        const backButton =
            this.window.querySelector(
                "#notesBack"
            );


        if (backButton) {

            backButton.onclick = () => {

                /*
                 * Close ONLY the Notes window.
                 * Desktop remains underneath.
                 */

                WINDOWS.close(
                    this.window
                );

            };

        }

    }


    /* ======================================================
       RENDER SIDEBAR
       ====================================================== */

    renderSidebar() {

        if (!this.window) return;


        const sidebar =
            this.window.querySelector(
                "#notesSidebar"
            );


        if (!sidebar) return;


        sidebar.innerHTML = "";


        this.notes.forEach(
            (note, index) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "note-item";


                item.textContent =
                    note.title;


                item.addEventListener(
                    "click",
                    () => {

                        this.openNote(index);

                    }
                );


                sidebar.appendChild(item);

            }
        );

    }


    /* ======================================================
       OPEN NOTE
       ====================================================== */

    openNote(index) {

        if (!this.window) return;


        const note =
            this.notes[index];


        if (!note) return;


        const title =
            this.window.querySelector(
                "#noteTitle"
            );


        const date =
            this.window.querySelector(
                "#noteDate"
            );


        const content =
            this.window.querySelector(
                "#noteContent"
            );


        if (title) {

            title.textContent =
                note.title;

        }


        if (date) {

            date.textContent =
                note.date;

        }


        if (content) {

            content.textContent =
                note.text;

        }

    }

}