'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data.slice(0, 3)); // Get only the first 3 posts
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Invalid date:', dateString);
      return 'Invalid Date';
    }
  };

  if (isLoading) {
    return <div className={styles.section}>Loading...</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>დიზაინ ბლოგი</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <article>
                <h3>{post.title}</h3>
                <time>{formatDate(post.date)}</time>
                <p>{post.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 