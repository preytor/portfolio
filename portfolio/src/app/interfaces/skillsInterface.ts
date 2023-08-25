interface skillDataInterface {
    name: string,
    src: string,
}

export interface skillsInterface {
    title: string,
    technologies: Array<skillDataInterface>,
    detailIsDisplayed: boolean,
}
