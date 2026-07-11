import { gql } from '@apollo/client';

export const GET_CAPABILITY_PAGE = gql`
  query GetCapabilityPage {
    pages(where: { title: "Capability" }, first: 1) {
      nodes {
        title
        capabilitySections {
          capabilitySections {
            __typename

            ... on CapabilitySectionsCapabilitySectionsHeroLayout {
              eyebrowText
              heading
              description
            }

            ... on CapabilitySectionsCapabilitySectionsDocumentsLayout {
              eyebrowText
              heading
              documents {
                title
                description
                fileType
                fileUrl
              }
            }
          }
        }
      }
    }
  }
`;
