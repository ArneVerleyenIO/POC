export interface Acf {
    project_type: ObjectType,
    description: string,
    industry: string,
    framework: string,
    picture: string,
    picture_body_1: string,
    picture_body_2: string,
    githubLink: string,
    code: string,
    price_range: string
}
export interface ObjectType {
    label: string,
    value: string
}

export interface Title {
    rendered: string
}

export interface ProjectModel {
    id: number,
    date: string,
    status: string,
    title: Title,
    acf: Acf,
    stateStatus?: 'pending' | 'confirmed' | 'declined';
}