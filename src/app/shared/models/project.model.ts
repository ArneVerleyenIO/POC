export class Acf {
  constructor (
    public project_type: ObjectType,
    public description: string,
    public industry: string,
    public framework: string,
    public picture: string,
    public picture_body_1: string,
    public picture_body_2: string,
    public githubLink: string,
    public code: string,
    public price_range: string
  ) {

  }
}
export class ObjectType {
  constructor (
    public label: string,
    public value: string
  ) {}
}

export class Title {
  constructor (
    public rendered: string
  ) {

  }
}

export class Project {
  constructor (
    public id: number,
    public date: string,
    public slug: string,
    public full_slug: string,
    public name: string,
    public content: Content
  ) {
  }
}
export class Content {
  constructor (
    public project_type: string,
    public title: string,
    public description: {
      content: [
        {
          content: [{
            text: string
          }]
        }
      ],
      type: ''
    },
    public industry: string,
    public framework: string,
    public image: string,
    public image_body_1: string,
    public image_body_2: string,
    public githubLink: string,
    public code: string,
    public price_range: string
  ) {

  }
}