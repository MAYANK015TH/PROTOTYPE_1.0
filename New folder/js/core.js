/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   CORE
   ========================================================== */

const APP = {

    desktop: null,

    windows: null,

    gallery: null,

    notes: null,

    memories: null,

    secret: null,

    boot: null

};

function launchDesktop(){

    if(typeof Desktop !== "function"){

        console.error("Desktop module missing.");

        return;

    }

    APP.desktop = new Desktop();

    APP.desktop.render();

}