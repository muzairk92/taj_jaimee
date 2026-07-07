import { gql } from '@apollo/client';

export const GET_PARTNERS_PAGE = gql`
  query GetPartnersPage {
    page(id: "partners", idType: URI) {
      title
      partnersPageSections {
        partnersSections {
          __typename
          ... on PartnersPageSectionsPartnersSectionsHeroLayout {
            eyebrowText
            heading
            description
          }
          ... on PartnersPageSectionsPartnersSectionsDirectoryLayout {
            eyebrowText
            heading
            partners {
              name
              website
              tagline
              body { paragraph }
              bestSuitedFor { tag }
            }
          }
          ... on PartnersPageSectionsPartnersSectionsResponsibleTechNoticeLayout {
            eyebrowText
            bodyText
          }
          ... on PartnersPageSectionsPartnersSectionsCtaLayout {
            eyebrowText
            heading
            description
            primaryButtonText
            primaryButtonUrl
          }
        }
      }
    }
  }
`;
