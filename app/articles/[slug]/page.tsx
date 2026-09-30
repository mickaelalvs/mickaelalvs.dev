import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getAllPosts, getPostBySlug} from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  try {
    const {slug} = await params;
    const post = getPostBySlug(slug, [
      'title',
      'seoTitle',
      'description',
      'canonical_url',
      'slug',
      'private',
      'date',
      'tags',
    ]);

    if (post.private) {
      return {title: 'Not Found'};
    }

    const description = post.description || '';
    const url = `https://mickaelalvs.dev/articles/${post.slug}`;
    const seoTitle = post.seoTitle || post.title;
    const ogTitle = `${seoTitle} | Mickaël Alves`;

    return {
      title: seoTitle,
      description,
      alternates: {
        canonical: post.canonical_url || url,
      },
      openGraph: {
        type: 'article',
        title: ogTitle,
        description,
        url,
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: ogTitle,
        description,
        images: [`/articles/${post.slug}/opengraph-image`],
      },
    };
  } catch {
    return {
      title: 'Not Found',
    };
  }
}

export default async function Post({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const post = getPostBySlug(slug, ['private']);

  if (post.private) {
    notFound();
  }

  const BlogPostPage = (await import('../../../modules/articles/BlogPostPage')).default;
  return <BlogPostPage slug={slug} />;
}
