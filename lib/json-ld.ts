interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
}

export const createArticleJsonLd = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author: {
    '@type': 'Person',
    name: 'Mickaël Alves',
    url: 'https://mickaelalvs.dev',
  },
});

export const getPersonJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mickaël Alves',
  givenName: 'Mickaël',
  familyName: 'Alves',
  url: 'https://mickaelalvs.dev',
  image: 'https://mickaelalvs.dev/avatar.png',
  jobTitle: 'Tech Lead Frontend at Zenika, acting as Staff Engineer at Bedrock Streaming',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Zenika',
      url: 'https://www.zenika.com',
    },
    {
      '@type': 'Organization',
      name: 'Bedrock Streaming',
      url: 'https://www.bedrockstreaming.com',
    },
  ],
  sameAs: [
    'https://github.com/mickaelalvs',
    'https://twitter.com/mickaelalvs',
    'https://www.linkedin.com/in/mickaelalves',
    'https://bsky.app/profile/mickaelalvs.dev',
  ],
  knowsAbout: [
    {'@type': 'Thing', name: 'Software Engineering'},
    {'@type': 'Thing', name: 'Technical Leadership'},
    {'@type': 'Thing', name: 'Frontend Architecture'},
    {'@type': 'Thing', name: 'Staff Engineering'},
    {'@type': 'Thing', name: 'React'},
    {'@type': 'Thing', name: 'TypeScript'},
    {'@type': 'Thing', name: 'Developer Experience'},
    {'@type': 'Thing', name: 'Web Development'},
    {'@type': 'Thing', name: 'Software Architecture'},
  ],
  knowsLanguage: [
    {'@type': 'Language', name: 'French'},
    {'@type': 'Language', name: 'Portuguese'},
    {'@type': 'Language', name: 'English'},
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressCountry: 'France',
  },
});
