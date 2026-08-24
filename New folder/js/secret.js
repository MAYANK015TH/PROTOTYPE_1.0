/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   CLASSIFIED SYSTEM v1.0
   ========================================================== */

class SecretSystem {

    constructor(){

        this.window = null;

        this.authorized = false;

    }

    /* ======================================================
       OPEN
       ====================================================== */

    open(){

        this.window = WINDOWS.create({

            title:"CLASSIFIED",

            content:this.layout()

        });

        this.bind();

    }

    /* ======================================================
       INITIAL LAYOUT
       ====================================================== */

    layout(){

        return `

<div class="classified-container">

    <div class="classified-header">

        <div class="classified-warning">

            ⚠ CLASSIFIED ARCHIVE

        </div>

        <div class="classified-level">

            SECURITY LEVEL: IMPORTANT-P1

        </div>

    </div>


    <div
    id="classifiedContent"
    class="classified-content">

        <div class="classified-lock">

            🔒

        </div>

        <div class="classified-title">

            ACCESS RESTRICTED

        </div>

        <div class="classified-description">

            This archive contains protected
            information.

            <br><br>

            Identity verification is required
            before access can be granted.

        </div>

        <button
        id="classifiedAccess"
        class="primary-button">

            VERIFY ACCESS

        </button>

    </div>


    <div class="classified-status">

        <span class="classified-status-dot"></span>

        SYSTEM SECURE

    </div>

</div>

`;

    }

    /* ======================================================
       EVENTS
       ====================================================== */

    bind(){

        const button =
            this.window.querySelector(
                "#classifiedAccess"
            );

        if(button){

            button.onclick = () => {

                this.verify();

            };

        }

    }

    /* ======================================================
       VERIFY
       ====================================================== */

    verify(){

        const content =
            this.window.querySelector(
                "#classifiedContent"
            );

        if(!content){

            return;

        }

        content.innerHTML = `

            <div class="classified-scan">

                <div class="scan-icon">

                    ◈

                </div>

                <div class="scan-title">

                    VERIFYING IDENTITY...

                </div>

                <div class="scan-lines">

                    <div>Scanning archive credentials...</div>

                    <div>Checking authorization level...</div>

                    <div>Validating access protocol...</div>

                </div>

            </div>

        `;

        setTimeout(() => {

            this.authorize();

        }, 1800);

    }

    /* ======================================================
       AUTHORIZATION
       ====================================================== */

    authorize(){

        this.authorized = true;

        const content =
            this.window.querySelector(
                "#classifiedContent"
            );

        if(!content){

            return;

        }

        content.innerHTML = `

            <div class="classified-authorized">

                <div class="authorized-icon">

                    ✓

                </div>

                <div class="authorized-title">

                    ACCESS GRANTED

                </div>

                <div class="authorized-text">

                    Identity verified successfully.

                    <br><br>

                    Authorization Level:

                    <strong>IMPORTANT-P1</strong>

                </div>

                <button
                id="classifiedEnter"
                class="primary-button">

                    ENTER ARCHIVE

                </button>

            </div>

        `;

        const enter =
            this.window.querySelector(
                "#classifiedEnter"
            );

        if(enter){

            enter.onclick = () => {

                this.enterArchive();

            };

        }

    }

    /* ======================================================
       ENTER ARCHIVE
       ====================================================== */

    enterArchive(){

        const content =
            this.window.querySelector(
                "#classifiedContent"
            );

        if(!content){

            return;

        }

        content.innerHTML = `

            <div class="classified-final">

                <div class="final-icon">

                    🔐

                </div>

                <div class="final-title">

                    CLASSIFIED ARCHIVE

                </div>

                <div class="final-text">

                    Archive successfully unlocked.

                    <br><br>

                    <span>

                        CONTENT STATUS:
                        AWAITING DATA

                    </span>

                    <br><br>

                    No classified content has been
                    added yet.

                </div>

            </div>

        `;

    }

}