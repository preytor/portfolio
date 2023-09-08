export const projectsEs = [
    {
        id: 'portfolio',
        name: "Portfolio",
        technologies: 'Angular16, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv1.webp",
            },
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv2.webp",
            },
            {
                title: 'Portfolio',
                src: "assets/images/projects/cv/cv3.webp",
            },
        ],
        url: 'https://github.com/preytor/portfolio',
        detail: "<p>Una página web responsive usada para mostrar mi CV.</p>",
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
                src: "assets/images/projects/gtd/gtd1.webp",
            },
            {
                title: 'Guess the draw',
                src: "assets/images/projects/gtd/gtd2.webp",
            },
            {
                title: 'Guess the draw',
                src: "assets/images/projects/gtd/gtd3.webp",
            },
        ],
        url: 'https://github.com/preytor/GuessTheDraw2',
        detail: `<p>Se creó como proyecto de fin de curso y consiste en un juego donde tienes que adivinar lo que otros dibujan.</p>
                <p>Tiene un ranking para los jugadores registrados pero se puede jugar como usuario invitado. Usa socket.io para comunicarse entre clientes cuando se escribe en el chat y el dibujo está sincronizado.</p>
                <p>En caso de que quieras probarlo, crea una sala y espera 1 minuto hasta que el turno pase al siguiente jugador (tú), entonces puedes abrir una nueva pestaña y conectarte con otro usuario invitado y comparar en las dos pantallas</p><p>Puede que no funcione bien en móviles.</p>`,
        codeSourceUrl: 'https://github.com/preytor/GuessTheDraw2',
        detailIsDisplayed: false,
        livePreview: 'http://185.237.99.127:81/',
    },
];
