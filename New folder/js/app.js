window.addEventListener("DOMContentLoaded", () => {

    if (typeof DigitalRain === "function") {

        new DigitalRain();

    }

    if (typeof FX !== "undefined") {

        FX.initialize();

    }

    const boot = new BootSystem();

    boot.initialize();

    boot.run();

});