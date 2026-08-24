/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   DIGITAL RAIN ENGINE v2.0
   ========================================================== */

class DigitalRain {

    constructor() {

        this.canvas = document.getElementById("matrixCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.fontSize = 11;

        this.characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz" +
            "0123456789" +
            "@#$%&*+-=<>[]{}()";

        this.columns = Math.floor(this.width / this.fontSize);

        this.streams = [];

        this.createStreams();

        window.addEventListener("resize", () => this.resize());

        requestAnimationFrame(() => this.animate());

    }

    resize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.columns = Math.floor(this.width / this.fontSize);

        this.createStreams();

    }

    randomCharacter() {

        return this.characters[
            Math.floor(Math.random() * this.characters.length)
        ];

    }

    createStreams() {

        this.streams = [];

        for (let i = 0; i < this.columns; i++) {

            this.streams.push({

                x: i * this.fontSize,

                y: Math.random() * -this.height,

                speed: 1 + Math.random() * 2.5,

                length: 8 + Math.floor(Math.random() * 18),

                opacity: 0.15 + Math.random() * 0.35

            });

        }

    }

    drawStream(stream) {

        for (let i = 0; i < stream.length; i++) {

            const y = stream.y - i * this.fontSize;

            if (y < 0 || y > this.height)
                continue;

            const alpha =
                (stream.length - i) / stream.length;

            if (i === 0) {

                this.ctx.fillStyle =
                    `rgba(230,245,255,${alpha})`;

            }

            else if (i < 3) {

                this.ctx.fillStyle =
                    `rgba(120,180,255,${alpha})`;

            }

            else {

                this.ctx.fillStyle =
                    `rgba(59,130,246,${
                        alpha * stream.opacity
                    })`;

            }

            this.ctx.fillText(

                this.randomCharacter(),

                stream.x,

                y

            );

        }

    }

    update() {

        this.ctx.fillStyle =
            "rgba(5,7,13,0.08)";

        this.ctx.fillRect(

            0,

            0,

            this.width,

            this.height

        );

        this.ctx.font =
            `${this.fontSize}px JetBrains Mono`;

        this.ctx.textAlign = "center";

        for (const stream of this.streams) {

            this.drawStream(stream);

            stream.y += stream.speed;

            if (

                stream.y - stream.length * this.fontSize >

                this.height + Math.random() * 600

            ) {

                stream.y =

                    -(Math.random() * 400);

                stream.speed =
                    1 + Math.random() * 2.5;

                stream.length =
                    8 + Math.floor(Math.random() * 18);

                stream.opacity =
                    0.15 + Math.random() * 0.35;

            }

        }

    }

    animate() {

        this.update();

        requestAnimationFrame(() =>

            this.animate()

        );

    }

}