
import React from 'react';
import { Project, SkillCategory, ExperienceItem, YouTubeVideo } from '../types/types';

export const SOCIAL_LINKS = {
  email: 'ankit.dev.78588@gmail.com',
  github: 'https://github.com/ankit078588',
  linkedin: 'https://www.linkedin.com/in/ankit-kumar-353b72319/',
  youtube: 'https://www.youtube.com/@ankitwritess'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'Next.js', 'React.js', 'TailwindCSS', 'Zustand', 'Framer Motion']
  },
  {
    title: 'Backend & Systems',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'RabbitMQ', 'Apache Kafka', 'WebSockets', 'Prisma']
  },
  {
    title: 'GenAI & Search',
    skills: ['LangChain', 'Google Gemini', 'Pinecone Vector DB', 'RAG', 'Prompt Engineering']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, ECS, S3)', 'Docker', 'Nginx', 'GitHub Actions', 'CloudFront', 'SQS', 'IAM']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'mlm-software',
    title: 'Scalable Multi-Level Marketing Backend',
    description: 'Complex financial engine handling binary tree hierarchies and automated payouts.',
    longDescription: 'Engineered a high-performance backend for a binary network marketing platform with robust commission propagation logic.',
    techStack: ['Node.js', 'BullMQ', 'Redis', 'PostgreSQL', 'Prisma'],
    features: [
      'Binary tree traversal for commission logic',
      'Automated weekly payouts via BullMQ workers',
      'High-performance Redis caching for tree lookups',
      'Atomic database transactions for financial integrity'
    ],
    githubUrl: 'https://github.com/ankit078588',
    liveUrl: 'https://myudbhab.in/',
    architectureDetails: 'PostgreSQL Recursive CTEs -> Redis Node Cache -> BullMQ Cron Workers -> Payment Gateway Integration.'
  },
  {
    id: 'video-streaming',
    title: 'Scalable Video Processing Pipeline',
    description: 'Cloud-native event-driven transcoding engine built on AWS.',
    longDescription: 'Designed and implemented an event-driven video processing pipeline that handles high-concurrency transcoding jobs using an asynchronous worker architecture.',
    techStack: ['Node.js', 'AWS S3', 'SQS', 'FFmpeg', 'CloudFront', 'Docker'],
    features: [
      'Multi-format transcoding (360p to 1080p)',
      'Asynchronous processing using SQS triggers',
      'Dockerized FFmpeg workers for horizontal scaling',
      'Content delivery via CloudFront CDN'
    ],
    githubUrl: 'https://github.com/ankit078588',
    architectureDetails: 'S3 Event Notifications -> SQS -> FFmpeg Worker (EC2/Docker) -> S3 (Processed) -> CloudFront.'
  },
  {
    id: 'ai-pdf-chat',
    title: 'RAG-based AI PDF Assistant',
    description: 'Semantic search engine allowing users to query PDF documents using LLMs.',
    longDescription: 'A sophisticated RAG (Retrieval Augmented Generation) system that extracts text from PDFs, generates embeddings, and enables conversational AI interaction.',
    techStack: ['Next.js', 'Langchain', 'Pinecone', 'AWS S3'],
    features: [
      'Semantic text chunking and vector storage',
      'Intelligent context retrieval from Pinecone',
      'Presigned URLs for secure document access',
      'Streaming chat responses'
    ],
    githubUrl: 'https://github.com/Ankit078588/nextjs-chat-with-pdf',
    liveUrl: 'https://nextjs-chat-with-pdf.vercel.app/',
    architectureDetails: 'PDF Upload -> LangChain Chunking -> Gemini Embeddings -> Pinecone -> Query Time Retrieval -> Gemini Synthesis.'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Synthosphere Technologies Pvt. Ltd',
    role: 'Backend Engineer',
    period: 'Sep 2024 - Dec 2025',
    bullets: [
      'Architected scalable microservices using Node.js and distributed message queues.',
      'Optimized database queries and implemented caching strategies resulting in 40% latency reduction.',
      'Lead the integration of GenAI features into core products using LangChain and Google Gemini.',
      'Developed and maintained CI/CD pipelines using GitHub Actions for seamless AWS deployments.'
    ]
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    title: 'Deep Dive: Distributed Systems',
    url: 'https://www.youtube.com/@ankitwritess',
    thumbnail: 'https://picsum.photos/seed/sys1/600/338'
  },
  {
    title: 'Explaining RAG Architectures',
    url: 'https://www.youtube.com/@ankitwritess',
    thumbnail: 'https://picsum.photos/seed/rag2/600/338'
  },
  {
    title: 'Event Driven Backend with RabbitMQ',
    url: 'https://www.youtube.com/@ankitwritess',
    thumbnail: 'https://picsum.photos/seed/mq3/600/338'
  }
];
