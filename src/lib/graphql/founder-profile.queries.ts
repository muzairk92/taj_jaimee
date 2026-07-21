import { gql } from '@apollo/client';

export const GET_FOUNDER_PROFILE_PAGE = gql`
  query GetFounderProfilePage {
    page(id: "founder-profile", idType: URI) {
      title
      founderProfilePageSections {
        founderProfileSections {
          __typename

          ... on FounderProfilePageSectionsFounderProfileSectionsHeroLayout {
            eyebrowText
            heading
            subheading
            paragraph
            tags {
              text
            }
            founderName
            founderRole
            photo {
              node {
                sourceUrl
                altText
              }
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsTaglineLayout {
            items {
              text
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsIntroductionLayout {
            eyebrowText
            heading
            headingEmphasis
            paragraph1
            paragraph2
            paragraph3
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsExpertiseLayout {
            eyebrowText
            heading
            headingEmphasis
            paragraph1
            paragraph2
            paragraph3
            quoteText
            quoteName
            quoteRole
            cards {
              title
              description
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsCredentialsLayout {
            eyebrowText
            heading
            headingEmphasis
            paragraph1
            paragraph2
            paragraph3
            credentials {
              title
              subtitle
            }
            paragraph4
            quoteText
            quoteName
            quoteRole
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsWhyFoundedLayout {
            eyebrowText
            heading
            headingEmphasis
            paragraph1
            paragraph2
            paragraph3
            paragraph4
            quoteText
            quoteName
            quoteRole
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsWayForwardLayout {
            eyebrowText
            heading
            headingEmphasis
            subEyebrowText
            paragraph1
            paragraph2
            paragraph3
            paragraph4
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsSignatureQuoteLayout {
            quoteText
            attributionName
            attributionRole
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsCtaLayout {
            heading
            description
            buttonText
            buttonUrl
          }
        }
      }
    }
  }
`;
