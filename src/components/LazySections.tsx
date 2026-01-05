"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const Statistics = dynamic(() => import('./Statistics'), { ssr: false, loading: () => <div /> });
const OurPeople = dynamic(() => import('./OurPeople'), { ssr: false, loading: () => <div /> });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false, loading: () => <div /> });

export default function LazySections() {
  return (
    <>
      <Statistics />
      <OurPeople />
      <Testimonials />
    </>
  );
}
