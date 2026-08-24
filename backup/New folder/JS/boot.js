/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   BOOT ENGINE
   ========================================================== */

const Boot = {

    output: null,
    progressBar: null,
    progressText: null,
    accessButton: null,

    typingSpeed: 28,

    bootSequence: [

        "Initializing IMPORTANT-P1 Protocol...",
        "",
        "[ OK ] Loading Memory Engine",
        "[ OK ] Connecting Archive Core",
        "[ OK ] Restoring Encrypted Database",
        "[ OK ] Verifying Security Protocols",
        "",
        "Scanning Identity...",
        "",
        "Identity Match Found.",
        "Welcome, [Her Name]",
        "",
        "Birthday Protocol Ready."

    ],

    initialize() {

        document.getElementById("app").innerHTML = `

        <div class="boot-screen">

            <div class="boot-terminal">

                <div class="boot-header">

                    <div class="boot-title">
                        IMPORTANT-P1 PROTOCOL
                    </div>

                    <div class="boot-version">
                        MEMORY ARCHIVE v1.0
                    </div>

                </div>

                <div id="bootOutput"
                     class="boot-output"></div>

                <div class="loading-container">

                    <div class="loading-bar">

                        <div id="loadingProgress"
                             class="loading-progress"></div>

                    </div>

                    <div id="loadingText"
                         class="loading-text">

                        Initializing...

                    </div>

                </div>

                <button id="accessButton"
                        class="access-button">

                    ACCESS ARCHIVE

                </button>

            </div>

        </div>

        `;

        this.output = document.getElementById("bootOutput");
        this.progressBar = document.getElementById("loadingProgress");
        this.progressText = document.getElementById("loadingText");
        this.accessButton = document.getElementById("accessButton");

    },

    async typeLine(text) {

        const line = document.createElement("div");

        line.className = "boot-line";

        this.output.appendChild(line);

        for (let i = 0; i < text.length; i++) {

            line.textContent += text[i];

            await this.sleep(this.typingSpeed);

        }

    },

    sleep(ms) {

        return new Promise(resolve => setTimeout(resolve, ms));

    },

    async runBootSequence() {

        for (const line of this.bootSequence) {

            await this.typeLine(line);

            await this.sleep(250);

        }

    }

};