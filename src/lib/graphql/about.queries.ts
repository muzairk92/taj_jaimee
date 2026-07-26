import { gql } from '@apollo/client';

export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    page(id: "about-us", idType: URI) {
      title
      aboutSections {
        aboutSections {
          __typename
          ... on AboutSectionsAboutSectionsHeroLayout {
            eyebrowText
            heading
            headingEmphasis
            subheading
          }
          ... on AboutSectionsAboutSectionsWhoWeAreLayout {
            eyebrowText
            heading
            headingEmphasis
            bodyParagraph1
            bodyParagraph2
            bodyParagraph3
            tagPanelLabel
            quickFacts { text }
          }
          ... on AboutSectionsAboutSectionsMissionVisionLayout {
            eyebrowText
            heading
            headingEmphasis
            missionLabel
            missionText
            visionLabel
            visionText
          }
          ... on AboutSectionsAboutSectionsValuesLayout {
            eyebrowText
            heading
            headingEmphasis
            description
            valueItems { title body }
          }
          ... on AboutSectionsAboutSectionsTeamLayout {
            eyebrowText
            heading
            headingEmphasis
            description
            founderRole
            founderName
            founderPhoto {
              node { sourceUrl altText }
            }
            founderBio
            founderQuote
            partners {
              initials
              photo {
                node { sourceUrl altText }
              }
              name
              role
              bio
              quote
              ctaText
              ctaUrl
            }
          }
          ... on AboutSectionsAboutSectionsAdvisoryNetworkLayout {
            eyebrowText
            heading
            headingEmphasis
            tagline
            introParagraph1
            introParagraph2
            networkQuote
            networkQuoteAttribution
            membersHeading
            membersHeadingEmphasis
            networkMembers {
              initials
              name
              role
              bio
              ctaText
              ctaUrl
            }
            processHeading
            processHeadingEmphasis
            processParagraph1
            processParagraph2
            processParagraph3
            mattersHeading
            mattersHeadingEmphasis
            mattersParagraph1
            mattersParagraph2
            stats {
              number
              label
            }
            ctaHeading
            ctaDescription
            ctaText
            ctaUrl
          }
          ... on AboutSectionsAboutSectionsFounderMessageLayout {
            messageText
            attribution
            buttonText
            buttonUrl
          }
          ... on AboutSectionsAboutSectionsFounderProfileLayout {
            eyebrowText
            heading
            headingEmphasis
            bodyParagraph1
            bodyParagraph2
            bodyParagraph3
            bodyParagraph4
            credentials { text }
            profilePhoto {
              node { sourceUrl altText }
            }
            testimonialQuote
            testimonialAttribution1
            testimonialAttribution2
          }
        }
      }
    }
  }
`;
