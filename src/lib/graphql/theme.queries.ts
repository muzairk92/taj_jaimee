import { gql } from '@apollo/client';

export const GET_THEME_SETTINGS = gql`
query GetThemeSettings {
  themeSettings {
    themeSettingsFields {
      header {
        logo {
          node { sourceUrl altText }
        }
        navItems {
          label
          url
          subItems {
            label
            url
          }
        }
        ctaText
        ctaUrl
      }
      footer {
        companyName
        tagline
        closerText
        footerColumns {
          columnTitle
          links { label url }
        }
        contactEmail
        contactLocation
        copyrightText
        linkedin
        facebook
        x
        instagram
        youtube
        tiktok
        threads
        pinterest
      }
      description {
        siteDescription
        metaDescription
        aboutUsSummary
      }
      scripts {
        headerScripts
        footerScripts
      }
    }
  }
}
`;