import { gql } from '@apollo/client';

export const GET_CONTACT_PAGE = gql`
  query GetContactPage {
    page(id: "contact", idType: URI) {
      title
      contactPageSections {
        contactSections {
          __typename
          ... on ContactPageSectionsContactSectionsHeroLayout {
            eyebrowText
            heading
            description
          }
          ... on ContactPageSectionsContactSectionsCapabilityCalloutLayout {
            text
            buttonText
            buttonUrl
          }
          ... on ContactPageSectionsContactSectionsReasonsLayout {
            eyebrowText
            heading
            reasons { text }
          }
          ... on ContactPageSectionsContactSectionsFormLayout {
            recipientEmail
            interestOptions { label }
            submitButtonText
          }
        }
      }
    }
  }
`;
