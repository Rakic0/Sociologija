import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = prismic.getRepositoryName(
  "https://sociologija.cdn.prismic.io/api/v2"
);

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aR2VLYUJBQUFDRUFwT0Vm.77-9Ge-_vUMPO--_ve-_vTHvv70677-9de-_vW_vv73vv73vv71OKgU977-977-9RO-_vVbvv73vv70n77-977-9",

  routes: [
    {
      type: "post",
      path: "/post/",
    },
  ],
});
