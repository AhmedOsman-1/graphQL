import { gql } from "graphql-request";
import { getClient } from "../lib/graphQlClient";

export const getAllPosts = async (tags) => {
    const client = getClient();

    const data = await client.request(
        gql`
            query allPosts($tags: [ObjectId!]) {
                publication(host: "blog.greenroots.info") {
                    posts(first: 10, filter: { tags: $tags }) {
                        totalDocuments
                        edges {
                            node {
                                title
                                publishedAt
                                brief
                                author {
                                    name
                                    profilePicture
                                }
                                content {
                                    html
                                }
                                readTimeInMinutes
                                reactionCount
                                comments(first: 5) {
                                    totalDocuments
                                    edges {
                                        node {
                                            author {
                                                name
                                            }
                                            content {
                                                markdown
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        { tags: tags }
    );
    return data.publication.posts.edges;
};

export const getPost = async (slug) => {
    const client = getClient();

    const data = await client.request(
        gql`
            query getPost($slug: String!) {
                publication(host: "blog.greenroots.info") {
                    post(
                        slug: $slug
                    ) {
                        author {
                            name
                            profilePicture
                        }
                        publishedAt
                        title
                        subtitle
                        readTimeInMinutes
                        content {
                            html
                        }
                        tags {
                            name
                            slug
                            id
                        }
                        coverImage {
                            url
                        }
                    }
                }
            }
        `,
        { slug: slug }
    );

    return data.publication.post;
};
