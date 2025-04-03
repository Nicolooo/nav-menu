import React from 'react';
import styles from './page.module.scss';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/mdx';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Blog</h1>
        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
 