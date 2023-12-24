export type Entity = {
  readonly _links: Links;
};

export type Links = {
  readonly self: Link;
  readonly [rel: string]: Link;
};

export type Link = {
  readonly href: string;
};
