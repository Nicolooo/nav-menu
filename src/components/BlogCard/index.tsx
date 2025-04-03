import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
import { BlogPost } from '../../lib/mdx';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <article>
        <h2>{post.title}</h2>
        <time>{new Date(post.date).toLocaleDateString()}</time>
        <p>{post.description}</p>
      </article>
    </Link>
  );
} 