/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   BOOT SYSTEM v3.0
   BLOCK 1 / 7
   ========================================================== */

class BootSystem {

    constructor() {

        this.app = document.getElementById("app");

        this.output = null;
        this.progressFill = null;
        this.progressStatus = null;
        this.progressPercent = null;
        this.accessButton = null;

        this.progress = 0;
        this.typingSpeed = 15;

        this.logs = [

            "Initializing Neural Core...",
            "Loading Security Layer...",
            "Decrypting Memory Archive...",
            "Connecting Timeline...",
            "Recovering Personal Files...",
            "Building Emotional Index...",
            "Synchronizing AI Modules...",
            "Authenticating User...",
            "Preparing IMPORTANT-P1..."

        ];

    }

    /* ======================================================
       INITIALIZE
       ====================================================== */

    initialize() {

        this.render();

        this.cache();

    }

    /* ======================================================
       CACHE DOM
       ====================================================== */

    cache() {

        this.output =
            document.getElementById("bootOutput");

        this.progressFill =
            document.getElementById("progressFill");

        this.progressStatus =
            document.getElementById("progressStatus");

        this.progressPercent =
            document.getElementById("progressPercent");

        this.accessButton =
            document.getElementById("accessButton");

    }

    /* ======================================================
       RENDER
       ====================================================== */

    render() {

        this.app.innerHTML = `

<div class="boot-screen">

    <div class="boot-terminal panel glass fade-in">

        <div class="boot-header">

            <div class="boot-title blue-glow">

                IMPORTANT-P1 PROTOCOL

            </div>

            <div class="boot-version">

                AI MEMORY ARCHIVE • v3.0

            </div>

        </div>

        <div
            id="bootOutput"
            class="boot-output">

        </div>

        <div class="boot-progress">

            <div class="progress-bar">

                <div
                    id="progressFill"
                    class="progress-fill">

                </div>

            </div>

            <div class="progress-meta">

                <span
                    id="progressStatus">

                    Waiting...

                </span>

                <span
                    id="progressPercent">

                    0%

                </span>

            </div>

        </div>

        <button
            id="accessButton"
            class="primary-button hidden">

            ACCESS ARCHIVE

        </button>

    </div>

</div>

`;

    }

    /* ======================================================
       UTILITIES
       ====================================================== */

    sleep(ms) {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    }

    createLine(text = "") {

        const line = document.createElement("div");

        line.className = "boot-line";

        line.textContent = text;

        this.output.appendChild(line);

        this.output.scrollTop =
            this.output.scrollHeight;

        return line;

    }

    /* ======================================================
       END BLOCK 1
       ====================================================== */
           /* ======================================================
       TYPEWRITER ENGINE
       ====================================================== */

    async type(text, speed = this.typingSpeed) {

        const line = this.createLine();

        for (let i = 0; i < text.length; i++) {

            line.textContent += text[i];

            this.output.scrollTop =
                this.output.scrollHeight;

            await this.sleep(speed);

        }

        return line;

    }

    /* ======================================================
       PRINT LINE
       ====================================================== */

    async print(text) {

        this.createLine(text);

        await this.sleep(35);

    }

    /* ======================================================
       BLANK LINE
       ====================================================== */

    blank() {

        this.createLine("");

    }

    /* ======================================================
       TIMESTAMP
       ====================================================== */

    timestamp() {

        const now = new Date();

        return now.toLocaleTimeString([], {

            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"

        });

    }

    /* ======================================================
       AI LOG
       ====================================================== */

    async log(text, status = "OK") {

        const time = this.timestamp();

        let prefix = "";

        switch (status) {

            case "OK":

                prefix = "[ OK ]";

                break;

            case "WARN":

                prefix = "[ WARN ]";

                break;

            case "FAIL":

                prefix = "[ FAIL ]";

                break;

            case "INFO":

                prefix = "[ INFO ]";

                break;

            default:

                prefix = "[ ... ]";

        }

        await this.type(

            `${time}  ${prefix}  ${text}`

        );

    }

    /* ======================================================
       UPDATE PROGRESS
       ====================================================== */

    async setProgress(target, message) {

        this.progressStatus.textContent = message;

        while (this.progress < target) {

            this.progress++;

            this.progressFill.style.width =

                this.progress + "%";

            this.progressPercent.textContent =

                this.progress + "%";

            await this.sleep(

                10 + Math.random() * 8

            );

        }

    }

    /* ======================================================
       PRINT BOOT HEADER
       ====================================================== */

    async printHeader() {

        await this.type(

            "IMPORTANT-P1 Secure Boot Initializing..."

        );

        this.blank();

        await this.log(

            "Neural Core Activated"

        );

        await this.log(

            "Security Layer Loaded"

        );

        await this.log(

            "Encrypted Memory Mounted"

        );

        this.blank();

    }

    /* ======================================================
       END BLOCK 2
       ====================================================== */
           /* ======================================================
       BOOT SEQUENCE
       ====================================================== */

    async bootSequence() {

        for (let i = 0; i < this.logs.length; i++) {

            const percent = Math.round(

                ((i + 1) / this.logs.length) * 60

            );

            await this.setProgress(

                percent,

                this.logs[i]

            );

            await this.log(

                this.logs[i],

                "OK"

            );

            await this.sleep(

                140

            );

        }

        this.blank();

    }

    /* ======================================================
       DIAGNOSTIC SCAN
       ====================================================== */

    async diagnostics() {

        const diagnostics = [

            "CPU Integrity Check",
            "Memory Consistency Check",
            "GPU Interface",
            "Storage Controller",
            "Archive Encryption",
            "Timeline Index",
            "AI Behaviour Model",
            "Birthday Package"

        ];

        for (const item of diagnostics) {

            await this.log(

                item,

                "INFO"

            );

            await this.sleep(

                90

            );

        }

        this.blank();

    }

    /* ======================================================
       MEMORY RECONSTRUCTION
       ====================================================== */

    async reconstructMemory() {

        const modules = [

            "Recovering Images...",
            "Recovering Videos...",
            "Recovering Notes...",
            "Recovering Conversations...",
            "Restoring Memories...",
            "Building Timeline..."

        ];

        for (let i = 0; i < modules.length; i++) {

            const progress =

                60 +

                Math.round(

                    ((i + 1) / modules.length) * 20

                );

            await this.setProgress(

                progress,

                modules[i]

            );

            await this.log(

                modules[i],

                "OK"

            );

            await this.sleep(

                150

            );

        }

        this.blank();

    }

    /* ======================================================
       SECURITY CHECK
       ====================================================== */

    async securityCheck() {

        const checks = [

            "Checking encrypted partitions...",
            "Verifying secure hashes...",
            "Authenticating AI kernel...",
            "Validating archive signature...",
            "Synchronizing secure modules..."

        ];

        for (const check of checks) {

            await this.log(

                check,

                "INFO"

            );

            await this.sleep(

                120

            );

        }

        this.blank();

    }

    /* ======================================================
       END BLOCK 3
       ====================================================== */
           /* ======================================================
       IDENTITY SCAN
       ====================================================== */

    async identityScan() {

        this.blank();

        await this.type(
            "Beginning identity verification..."
        );

        await this.sleep(500);

        const checks = [

            "Scanning biometric profile...",
            "Matching archive signature...",
            "Decrypting personal timeline...",
            "Analyzing emotional fingerprint...",
            "Validating security clearance..."

        ];

        for (const check of checks) {

            await this.scanEffect(check);

        }

        this.blank();

        await this.log(
            "Identity Successfully Verified",
            "OK"
        );

        await this.log(
            "Access Level : IMPORTANT-P1",
            "OK"
        );

        this.blank();

    }

    /* ======================================================
       SCAN EFFECT
       ====================================================== */

    async scanEffect(finalText) {

        const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        const line = this.createLine();

        for(let i=0;i<10;i++){

            let fake="";

            for(let j=0;j<finalText.length;j++){\n\n                fake += chars[\n                    Math.floor(\n                        Math.random()*chars.length\n                    )\n                ];\n\n            }\n\n            line.textContent=fake;\n\n            await this.sleep(35);\n\n        }\n\n        line.textContent=finalText;\n\n        await this.sleep(180);\n\n    }\n\n    /* ======================================================\n       AUTHORIZE USER\n       ====================================================== */\n\n    async authorize() {\n\n        await this.setProgress(\n\n            100,\n\n            \"Authorization Complete\"\n\n        );\n\n        await this.sleep(300);\n\n        this.blank();\n\n        await this.type(\n            \"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\"\n        );\n\n        await this.type(\n            \"      ACCESS GRANTED\"\n        );\n\n        await this.type(\n            \"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\"\n        );\n\n        this.blank();\n\n        await this.log(\n            \"Birthday Archive Ready\",\n            \"OK\"\n        );\n\n        await this.sleep(500);\n\n    }\n\n    /* ======================================================\n       ENABLE ACCESS BUTTON\n       ====================================================== */\n\n    enableAccessButton() {\n\n        this.accessButton.classList.remove(\"hidden\");\n\n        this.accessButton.disabled = false;\n\n        this.accessButton.onclick = () => {\n\n            this.launchDesktop();\n\n        };\n\n    }\n\n    /* ======================================================\n       END BLOCK 4\n       ====================================================== */\n           /* ======================================================\n       DESKTOP TRANSITION\n       ====================================================== */\n\n    async launchDesktop() {\n\n        this.accessButton.disabled = true;\n\n        this.accessButton.textContent =\n\n            \"OPENING...\";\n\n        await this.sleep(500);\n\n        this.app.classList.add(\"boot-fade-out\");\n\n        await this.sleep(900);\n\n        this.app.innerHTML = \"\";\n\n        try {\n\n            if (typeof DesktopSystem === \"function\") {\n\n                window.DESKTOP =\n\n                    new DesktopSystem();\n\n                window.DESKTOP.initialize();\n\n            }\n\n            else if (typeof Desktop === \"function\") {\n\n                window.DESKTOP =\n\n                    new Desktop();\n\n                if(typeof window.DESKTOP.initialize===\"function\"){\n\n                    window.DESKTOP.initialize();\n\n                }\n\n                else if(typeof window.DESKTOP.render===\"function\"){\n\n                    window.DESKTOP.render();\n\n                }\n\n            }\n\n            else {\n\n                throw new Error(\n\n                    \"Desktop module missing.\"\n\n                );\n\n            }\n\n        }\n\n        catch(error){\n\n            console.error(error);\n\n            this.showFatalError(\n\n                error.message\n\n            );\n\n        }\n\n    }\n\n    /* ======================================================\n       FATAL ERROR\n       ====================================================== */\n\n    showFatalError(message){\n\n        this.app.innerHTML = `\n\n<div class=\"boot-screen\">\n\n    <div class=\"boot-terminal panel glass fade-in\">\n\n        <div class=\"boot-title blue-glow\">\n\n            SYSTEM ERROR\n\n        </div>\n\n        <br>\n\n        <div class=\"boot-line\">\n\n            ${message}\n\n        </div>\n\n        <br>\n\n        <button\n            class=\"primary-button\"\n            onclick=\"location.reload()\">\n\n            RESTART\n\n        </button>\n\n    </div>\n\n</div>\n\n`;\n\n    }\n\n    /* ======================================================\n       SHUTDOWN EFFECT\n       ====================================================== */\n\n    async shutdown(){\n\n        this.blank();\n\n        await this.log(\n\n            \"Closing boot interface...\",\n\n            \"INFO\"\n\n        );\n\n        await this.sleep(300);\n\n        this.app.classList.add(\n\n            \"boot-fade-out\"\n\n        );\n\n    }\n\n    /* ======================================================\n       END BLOCK 5\n       ====================================================== */\n           /* ======================================================\n       FINAL BOOT SEQUENCE\n       ====================================================== */\n\n    async completeBoot() {\n\n        await this.printHeader();\n\n        await this.bootSequence();\n\n        await this.diagnostics();\n\n        await this.securityCheck();\n\n        await this.reconstructMemory();\n\n        await this.identityScan();\n\n        await this.authorize();\n\n        await this.finalMessages();\n\n        this.enableAccessButton();\n\n    }\n\n    /* ======================================================\n       FINAL SYSTEM MESSAGES\n       ====================================================== */\n\n    async finalMessages() {\n\n        const messages = [\n\n            \"Neural Core ............. ONLINE\",\n            \"Security Layer ......... ACTIVE\",\n            \"Memory Archive ......... CONNECTED\",\n            \"Timeline Database ...... SYNCHRONIZED\",\n            \"Birthday Package ....... READY\",\n            \"System Status .......... STABLE\"\n\n        ];\n\n        this.blank();\n\n        for(const message of messages){\n\n            await this.type(message);\n\n            await this.sleep(120);\n\n        }\n\n        this.blank();\n\n        await this.type(\n            \"--------------------------------------------------\"\n        );\n\n        await this.type(\n            \"Awaiting user authorization...\"\n        );\n\n        this.blank();\n\n    }\n\n    /* ======================================================\n       RESET TERMINAL\n       ====================================================== */\n\n    resetTerminal(){\n\n        if(this.output){\n\n            this.output.innerHTML=\"\";\n\n        }\n\n        this.progress=0;\n\n        if(this.progressFill){\n\n            this.progressFill.style.width=\"0%\";\n\n        }\n\n        if(this.progressPercent){\n\n            this.progressPercent.textContent=\"0%\";\n\n        }\n\n        if(this.progressStatus){\n\n            this.progressStatus.textContent=\"Initializing...\";\n\n        }\n\n    }\n\n    /* ======================================================\n       RESTART\n       ====================================================== */\n\n    async restart(){\n\n        this.resetTerminal();\n\n        await this.run();\n\n    }\n\n    /* ======================================================\n       END BLOCK 6\n       ====================================================== */\n           /* ======================================================\n       RUN\n       ====================================================== */\n\n    async run() {\n\n        try {\n\n            this.resetTerminal();\n\n            await this.completeBoot();\n\n        }\n\n        catch(error){\n\n            console.error(\n\n                \"Boot Failure:\",\n\n                error\n\n            );\n\n            this.showFatalError(\n\n                error.message ||\n\n                \"Unknown boot error.\"\n\n            );\n\n        }\n\n    }\n\n    /* ======================================================\n       DESTROY\n       ====================================================== */\n\n    destroy(){\n\n        if(this.accessButton){\n\n            this.accessButton.onclick=null;\n\n        }\n\n    }\n\n    /* ======================================================\n       VERSION\n       ====================================================== */\n\n    getVersion(){\n\n        return{\n\n            name:\"IMPORTANT-P1\",\n\n            version:\"3.0\",\n\n            build:\"2026.08\"\n\n        };\n\n    }\n\n    /* ======================================================\n       DEBUG\n       ====================================================== */\n\n    debug(){\n\n        console.table({\n\n            Progress:this.progress,\n\n            Output:!!this.output,\n\n            Button:!!this.accessButton,\n\n            Version:this.getVersion().version\n\n        });\n\n    }\n\n}\n\n/* ==========================================================\n   END OF BOOT SYSTEM\n   ========================================================== */\n