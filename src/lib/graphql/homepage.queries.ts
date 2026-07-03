import { gql } from '@apollo/client';

export const GET_HOMEPAGE = gql`
  query GetHomepage {
    page(id: "home", idType: URI) {
      title
      homepageSections {
        homepageSections {
          __typename
          ... on HomepageSectionsHomepageSectionsHeroLayout {
            eyebrowText
            heading
            subheading
            description
            primaryButtonText
            primaryButtonUrl
            secondaryButtonText
            secondaryButtonUrl
            backgroundImage {
              node { sourceUrl altText }
            }
          }
          ... on HomepageSectionsHomepageSectionsTrustBarLayout {
            trustItems { label }
          }
          ... on HomepageSectionsHomepageSectionsStatsBarLayout {
            stats { number label }
          }
          ... on HomepageSectionsHomepageSectionsFeatureCardsLayout {
            eyebrowText
            heading
            description
            cards { number title description }
          }
          ... on HomepageSectionsHomepageSectionsWhoWeWorkWithLayout {
            eyebrowText
            heading
            description
            buttonText
            buttonUrl
            traits { text }
          }
          ... on HomepageSectionsHomepageSectionsServicesPillarsLayout {
            eyebrowText
            heading
            description
            pillars { label title description linkText linkUrl }
          }
          ... on HomepageSectionsHomepageSectionsFounderBioLayout {
            eyebrowText
            heading
            bioParagraph1
            bioParagraph2
            quote
            founderImage {
              node { sourceUrl altText }
            }
            founderName
            founderTitle
            buttonText
            buttonUrl
            structureItems { label sublabel }
          }
          ... on HomepageSectionsHomepageSectionsPartnerEcosystemLayout {
            eyebrowText
            heading
            description
            partnerLogos {
              logo {
                node { sourceUrl altText }
              }
              name
            }
            buttonText
            buttonUrl
          }
          ... on HomepageSectionsHomepageSectionsAwardsBarLayout {
            awards {
              icon {
                node { sourceUrl altText }
              }
              title
              subtitle
            }
          }
          ... on HomepageSectionsHomepageSectionsTestimonialsLayout {
            eyebrowText
            heading
            description
            testimonials {
              quote
              name
              title
              avatar {
                node { sourceUrl altText }
              }
            }
          }
          ... on HomepageSectionsHomepageSectionsIndustriesLayout {
            eyebrowText
            heading
            industries { label }
            buttonText
            buttonUrl
          }
          ... on HomepageSectionsHomepageSectionsInsightsLayout {
            eyebrowText
            heading
            description
            articles { category title description }
          }
          ... on HomepageSectionsHomepageSectionsFinalCtaLayout {
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