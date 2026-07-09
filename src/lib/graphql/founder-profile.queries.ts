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
            founderName
            founderRole
            photo {
              node {
                sourceUrl
                altText
              }
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsStoryLayout {
            paragraphs {
              text
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsExpertiseLayout {
            eyebrowText
            heading
            items {
              title
              description
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsResearchLayout {
            eyebrowText
            heading
            paragraph1
            paragraph2
            proofPoints {
              text
            }
            ctaText
            ctaUrl
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsReferencesLayout {
            eyebrowText
            heading
            pullQuote
            introText
            groups {
              category
              intro
              testimonials {
                quote
                name
                title
                photo {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }

          ... on FounderProfilePageSectionsFounderProfileSectionsCtaLayout {
            eyebrowText
            heading
            description
            primaryButtonText
            primaryButtonUrl
            secondaryButtonText
            secondaryButtonUrl
          }
        }
      }
    }
  }
`;
