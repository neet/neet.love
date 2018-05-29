export interface Social {
  name: string;
  label: string;
  href: string;
  copy: string;
  fa: string;
}

export interface Meta {
  gravatar_email: string;
}

export interface MediumPost {
  id: string;
  title: string;
  virtuals: {
    subtitle: string;
    previewImage: {
      imageId: string,
    };
  };
  author: {
    name: string;
  };
}

export default interface GraphQLRoot {
  allSocialYaml: {
    edges: { node: Social }[];
  };

  allMetaYaml: {
    edges: { node: Meta }[];
  };

  allMediumPost: {
    edges: { node: MediumPost }[],
  };
}
