/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   APPLICATION ENTRY POINT
   ========================================================== */

document.addEventListener("DOMContentLoaded", async () => {

    Boot.initialize();

    await Boot.runBootSequence();

});