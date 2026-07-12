import { gql } from '@apollo/client';

export const GET_ALL_TEAM_MEMBERS = gql`
  query GetAllTeamMembers {
    teamMembers(first: 10) {
      edges {
        node {
          id
          title
          slug
          teamMemberFields {
            role
            qualification
            quote
            bioParagraphs {
              text
            }
            photo {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TEAM_MEMBER = gql`
  query GetTeamMember($slug: ID!) {
    teamMember(id: $slug, idType: SLUG) {
      id
      title
      slug
      teamMemberFields {
        role
        qualification
        quote
        bioParagraphs {
          text
        }
        photo {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
