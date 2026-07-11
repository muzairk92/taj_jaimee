import { gql } from '@apollo/client';

export const GET_INSIGHTS_LIST = gql`
  query GetInsights($first: Int = 50, $after: String) {
    insights(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      nodes {
        id
        databaseId
        title
        slug
        date
        uri
        insightFields {
          category
          subtitle
          author
          readTime
          publishDate
        }
      }
    }
  }
`;

export const GET_INSIGHT_DETAIL = gql`
  query GetInsightDetail($slug: ID!) {
    insight(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      date
      uri
      insightFields {
        category
        subtitle
        author
        readTime
        publishDate
        closerText
        closerCtaText
        closerCtaUrl
        body {
          __typename
          ... on InsightFieldsBodyParagraphBlockLayout {
            text
          }
          ... on InsightFieldsBodyHeadingBlockLayout {
            text
          }
          ... on InsightFieldsBodyQuoteBlockLayout {
            text
          }
          ... on InsightFieldsBodyCitationBlockLayout {
            text
          }
        }
      }
    }
  }
`;

export const GET_INSIGHTS_PAGE = gql`
  query GetInsightsPage {
    pages(where: { title: "Insights" }, first: 1) {
      nodes {
        title
        insightsPageSections {
          insightsSections {
            __typename
            ... on InsightsPageSectionsInsightsSectionsHeroLayout {
              eyebrowText
              heading
              description
            }
            ... on InsightsPageSectionsInsightsSectionsCategoriesLayout {
              eyebrowText
              heading
              categories {
                title
                description
              }
            }
          }
        }
      }
    }
  }
`;
