'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles.backButton}>
      ← Back
    </button>
  );
} 