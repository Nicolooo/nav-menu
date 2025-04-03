import React from 'react';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import { getPostBySlug } from '../../../lib/mdx';
import BackButton from '../../../components/BackButton';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackButton />
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
          </header>
          <div className={styles.content}>
            {/* MDX content will be rendered here */}
            {post.content}
          </div>
        </article>
      </div>
    </main>
  );
} 