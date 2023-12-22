export interface Entity {
  readonly _links: Links;
}

export interface Links {
  readonly self: Link;
  readonly [rel: string]: Link;
}

export interface Link {
  readonly href: string;
}
