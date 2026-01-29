import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import PageHeader from '@/components/page-header';
import AboutHeader from '@/components/about/about-header';
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import { getBlogPosts } from "@/lib/db/v1/post";
import config from '@/config';
import { Suspense } from "react";
import Script from "next/script";

const DynamicLatestArticles = dynamic(() => import('@/components/about/latest-articles'), {
  loading: () => <p>Loading latest articles...</p>,
});

const DynamicLifeStyles = dynamic(() => import('@/components/about/life-styles'), {
  loading: () => <p>Loading life styles...</p>,
});

const DynamicCodingStats = dynamic(() => import('@/components/about/coding-stats'), {
  loading: () => <p>Loading coding stats...</p>,
});

const DynamicSkills = dynamic(() => import('@/components/about/skills'), {
  loading: () => <p>Loading skills...</p>,
});

const DynamicFeaturedProjects = dynamic(() => import('@/components/about/featured-projects'), {
  loading: () => <p>Loading featured projects...</p>,
});

const DynamicCertifications = dynamic(() => import('@/components/about/certifications'), {
  loading: () => <p>Loading certifications...</p>,
});

const {
  about, title, description,
  author, keywords,
  openGraph, siteURL, featuredProjects, certifications
} = config;
const {
  firstName, lastName, preferredName, introduction,
  lifestyles, techStacks, githubUsername, skills
} = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
  },
  manifest: '/manifest.webmanifest',
  twitter: {
    card: "summary_large_image",
    title: "Milan Sharma - v56 | Data Engineer & AI Enthusiast",
    description:
      "Hi, I’m Milan Sharma, a visionary Data Engineer with a deep passion for AI 🤖, Machine Learning 📊, and Generative AI 🎨. I specialize in crafting groundbreaking AI models, designing intelligent agents, and building AI-powered applications 📱 that address real-world challenges. With a robust engineering foundation and an insatiable curiosity for deep learning and automation 🔧, I aim to redefine the boundaries of technology. Beyond my professional endeavors, I’m an open-source advocate 🌐, a dedicated mentor, and a lifelong learner 📚. When I’m not immersed in code, you’ll find me on the basketball court 🏀, exploring virtual worlds 🎮, capturing moments through photography 📸, or weaving stories 🎤. Let’s connect and create something extraordinary together!.",
    images: "",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/logo.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  },
};

const addJsonLd = () => {
  return {
    __html: `{
      "@context": "http://schema.org",
      "@type": "Person",
      "@id": "${siteURL}#person",
      "givenName": ${firstName},
      "familyName": ${lastName},
      "additionalName": ${preferredName},
      "gender": "male",
      "birthPlace": "Pune, India",
      "nationality": "India",
      "alumniOf":[
        {
          "@type": "CollegeOrUniversity",
          "name": " Rajesthan Technical University ",
          "sameAs": "https://www.rtu.ac.in/"
        },
      ],
      "jobTitle": "Data Engineer & Data Analyst",
      "skills": "Python, SQL, Data Engineering, Machine Learning, Data Analysis & Visualization, ETL Pipelines, APIs, Big Data Concepts, Cloud & Scalable Systems",
      "image": "https://www.1chooo.com/images/profile.webp",
      "url": ${siteURL},
      "sameAs": [
        "https://www.linkedin.com/in/milansharma01",
        "https://github.com/MilannSharma",
        "Milan",
      ],
    }
  `,
  }
}

async function About() {
  let allBlogs = await getBlogPosts();

  let selectedPosts = allBlogs.map((post: any) => ({
    ...post,
    metadata: {
      ...post.metadata,
      category: post.metadata.category || "Uncategorized",
    },
  }));

  let header = preferredName ?
    `About ${preferredName} 👨🏻‍💻` : ` ${firstName} ${lastName} 👨🏻‍💻`;

  return (
    <article>
      <Script
        id="application/ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="1chooo-website-jsonld"
      />
      <PageHeader header={header} />
      <AboutHeader
        id="introduction"
        text="$ ls -al V56 👨🏻‍💻"
      />
      <MarkdownRenderer
        className="text-light-gray leading-relaxed"
        content={introduction}
      />
      {/*       <Suspense fallback={<p>Loading latest articles...</p>}>
        <DynamicLatestArticles posts={selectedPosts} />
      </Suspense> */}

      <Suspense fallback={<p>Loading coding stats...</p>}>
        <DynamicCodingStats
          techStacks={techStacks}
          githubUsername={githubUsername}
        />
      </Suspense>
      <Suspense fallback={<p>Loading skills...</p>}>
        <DynamicSkills skills={skills} />
      </Suspense>
      <Suspense fallback={<p>Loading featured projects...</p>}>
        <DynamicFeaturedProjects projects={featuredProjects} />
      </Suspense>
      <Suspense fallback={<p>Loading certifications...</p>}>
        <DynamicCertifications certifications={certifications} />
      </Suspense>
      <Suspense fallback={<p>Loading life styles...</p>}>
        <DynamicLifeStyles lifestyles={lifestyles} />
      </Suspense>
    </article>
  );
};

export default About;
