/* ==========================================================
   IMPORTANT-P1 PROTOCOL
   MEMORY DATABASE
   ========================================================== */

const MEMORY_DATABASE = {

    profile: {

        codename: "SUBJECT-01",

        displayName: "Her Name",

        birthday: "YYYY-MM-DD"

    },

    folders: [

        {
            id: "images",
            title: "Funny Images",
            locked: false
        },

        {
            id: "notes",
            title: "Recovered Notes",
            locked: false
        },

        {
            id: "memories",
            title: "Memories",
            locked: false
        },

        {
            id: "videos",
            title: "Videos",
            locked: false
        },

        {
            id: "classified",
            title: "Classified",
            locked: true
        }

    ],

    gallery: [

        {
            image: "assets/images/1.jpg",
            caption: "Replace with your caption."
        },

        {
            image: "assets/images/2.jpg",
            caption: "Replace with your caption."
        },

        {
            image: "assets/images/3.jpg",
            caption: "Replace with your caption."
        }

    ],

    notes: [

        {

            title: "Recovered_Note_01",

            date: "Unknown",

            text:
`Replace this with your first message.`

        },

        {

            title: "Recovered_Note_02",

            date: "Unknown",

            text:
`Replace this with another memory.`

        }

    ],

    memories: [

        {

            title: "Memory Fragment",

            description:
            "Coming Soon"

        }

    ],

    videos: [

    ],

    classified: [

        {

            locked: true,

            title: "Birthday Protocol",

            unlocked: false

        }

    ]

};