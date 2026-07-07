import { gql } from '@apollo/client';

export const GET_SERVICES_PAGE = gql`
  query GetServicesPage {
    page(id: "services", idType: URI) {
      title
      servicesPageSections {
        servicesSections {
          __typename
          ... on ServicesPageSectionsServicesSectionsHeroLayout {
            eyebrowText
            heading
            description
            pillarsIntro
          }
          ... on ServicesPageSectionsServicesSectionsStrategyPillarLayout {
            eyebrowText
            heading
            description
            services { title body }
          }
          ... on ServicesPageSectionsServicesSectionsTalentPillarLayout {
            eyebrowText
            heading
            description
            serviceTitle
            serviceBody
            bioParagraph1
            bioParagraph2
            bioParagraph3
            testimonialsHeading
            testimonialsIntro
            testimonials {
              quote
              name
              role
              context
            }
          }
          ... on ServicesPageSectionsServicesSectionsTechPillarLayout {
            eyebrowText
            heading
            description
            serviceTitle
            bodyParagraph1
            bodyParagraph2
            bodyParagraph3
            bodyParagraph4
          }
          ... on ServicesPageSectionsServicesSectionsWhoWeHelpLayout {
            eyebrowText
            heading
            audiences { text }
          }
          ... on ServicesPageSectionsServicesSectionsEngagementsLayout {
            eyebrowText
            heading
            engagements { title description }
            buttonText
            buttonUrl
          }
          ... on ServicesPageSectionsServicesSectionsIndustriesLayout {
            eyebrowText
            heading
            industries { title body }
            howWeSupportHeading
            howWeSupportIntro
            howWeSupportItems { text }
          }
          ... on ServicesPageSectionsServicesSectionsSolutionAreasLayout {
            heading
            solutionAreas { title body }
          }
          ... on ServicesPageSectionsServicesSectionsCtaLayout {
            eyebrowText
            heading
            description
            primaryButtonText
            primaryButtonUrl
            secondaryButtonText
            secondaryButtonUrl
          }
          ... on ServicesPageSectionsServicesSectionsCapabilityDeckLayout {
            eyebrowText
            heading
            description
            testimonialParagraph1
            testimonialParagraph2
            attribution
            attributionContext
            buttonText
            buttonUrl
          }
        }
      }
    }
  }
`;
