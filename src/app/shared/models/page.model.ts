export class Title {
  constructor(
    public rendered: string
  ) {

  }
}

export class Content {
  constructor(
    public rendered: string
  ) {

  }
}

export class Page {
  constructor(
    public id: number,
    public title: Title,
    public content: Content,
    public date: string,
    public slug: string,
    public author: number,
  ) {

  }
}
