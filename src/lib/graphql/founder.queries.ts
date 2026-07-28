import { gql } from '@apollo/client';

export const GET_FOUNDER_PAGE = gql`
  query GetFounderPage {
    page(id: "founder", idType: URI) {
      founderPageSections {
        founderSections {
          __typename

          ... on FounderPageSectionsFounderSectionsStoryLayout {
            eyebrowText
            heading
            headingEmphasis
            lead
            founderName
            founderRole
            photo {
              node {
                sourceUrl
                altText
              }
            }
            tags {
              text
            }
            stats {
              number
              label
            }
            paragraph1
            paragraph2
            paragraph3
            timeline {
              period
              company
              role
              description
            }
            foundingBoxLabel
            foundingParagraph1
            foundingParagraph2
            foundingParagraph3
            foundingParagraph4
            signatureQuote
            signatureAttribution
          }

          ... on FounderPageSectionsFounderSectionsCredentialsLayout {
            eyebrowText
            heading
            headingEmphasis
            lead
            credentialCards {
              icon
              label
              title
              body
            }
            researchLabel
            researchTitle
            researchTitleEmphasis
            researchParagraph1
            researchParagraph2
            researchParagraph3
            proofBadges {
              icon
              title
              subtitle
            }
            connectionHeading
            connectionParagraph
            expertiseItems {
              numeral
              title
              body
            }
            marketLabel
            marketBody
          }

          ... on FounderPageSectionsFounderSectionsReferencesLayout {
            eyebrowText
            heading
            headingEmphasis
            lead
            noteLabel
            noteBody
            categories {
              label
              references {
                person
                title
                context
                quote
                note
              }
            }
          }

          ... on FounderPageSectionsFounderSectionsCapabilityLayout {
            eyebrowText
            heading
            headingEmphasis
            lead
            glanceTitle
            glanceTitleEmphasis
            glanceBody
            pillarsHeading
            pillarsHeadingEmphasis
            pillars {
              label
              name
              role
              items {
                text
              }
            }
            sectorsHeading
            sectors {
              icon
              name
              subtitle
            }
            geoLabel
            regions {
              name
              detail
            }
            engagementsHeading
            engagements {
              label
              title
              body
            }
            downloadTitle
            downloadSubtitle
            downloadButtonText
            downloadButtonUrl
          }

          ... on FounderPageSectionsFounderSectionsConnectLayout {
            eyebrowText
            heading
            headingEmphasis
            lead
            heroEyebrow
            heroTitle
            heroTitleEmphasis
            heroBody
            reasonsHeading
            reasons {
              icon
              title
              body
            }
            processHeading
            processSteps {
              number
              title
              body
            }
            formGuideLabel
            formField1Label
            formField1Hint
            formField2Label
            formField2Hint
            formField3Label
            formOptionTags {
              text
            }
            formField4Label
            formField4Hint
            linkedinHeading
            socials {
              icon
              platform
              detail
              linkText
              linkUrl
            }
            finalEyebrow
            finalTitle
            finalTitleEmphasis
            finalBody
            finalPrimaryButtonText
            finalPrimaryButtonUrl
            finalSecondaryButtonText
            finalSecondaryButtonUrl
            finalResponseNote
          }
        }
      }
    }
  }
`;
