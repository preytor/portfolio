interface projectImagesInterface {
    title: string,
    src: string,
}

export interface projectsInterface {
    id: string,
    name: string,
    technologies: string,
    images: Array<projectImagesInterface>,
    url: string,
    detail: string,
    codeSourceUrl: string,
    detailIsDisplayed: boolean,
}
