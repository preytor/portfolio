export const projectsEn = [
    {
        id: 'portfolio',
        name: "Portfolio",
        technologies: 'Angular16, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv1.png",
            },
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv2.png",
            },
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv3.png",
            },
        ],
        url: 'https://github.com/preytor/portfolio',
        detail: "<p> A responsive web site used to show my CV.</p>",
        codeSourceUrl: 'https://github.com/preytor/portfolio',
        detailIsDisplayed: false,
        livePreview: 'https://pablogr.dev/',
    },
    {
        id: 'guessthedraw',
        name: "Guess the draw",
        technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap, Socket.io, Node.js, Express, MongoDB',
        images: [
            {
                title: 'Guess the draw',
                src: "assets/images/projects/gtd/gtd1.png",
            },
            {
                title: 'Guess the draw',
                src: "assets/images/projects/gtd/gtd2.png",
            },
            {
                title: 'Guess the draw',
                src: "assets/images/projects/gtd/gtd3.png",
            },
        ],
        url: 'https://github.com/preytor/GuessTheDraw2',
        detail: `<p>It was created as the final year project and it consists of a game where you need to guess what other people draws.</p>
                <p>It has a ranking for registered players but it can be played as a guest user. It uses socket.io to communicate between clients when typing in the chat and the drawing is syncronized.</p>
                <p>In case you want to try it, create a room and wait 1 minute until the turn skips to the next player (you), then you can open a new tab and connect with another guest user and compare in the two screens</p><p>It might not work well in phones.</p>`,
        codeSourceUrl: 'https://github.com/preytor/GuessTheDraw2',
        detailIsDisplayed: false,
        livePreview: 'http://185.237.99.127:81/',
    },
];
