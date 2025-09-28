import type { Article, Topic, StaffPicks } from '../types';

export const mockArticles: Article[] = [
  {
    author: {
      name: "In Language Lab by Benben",
      image: "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
      verified: true
    },
    title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
    preview: "It’s not a skill issue, but a marketing issue",
    image: "/hiringImage.png",
    readTime: "5 min",
    date: "4 days ago",
    engagement: {
      likes: 1.2,
      comments: 45
    },
    isStaffPick: true
  },
  {
    author: {
      name: "In Level Up Coding by Attila Vágó",
      image: "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
    },
    title: "Welcome To Dream-Driven Development Where Nothing Works",
    preview: "Half-baked diagrams, features that make no sense, Mikado architecture. You’ve seen it, you’ve lived it, and it has a name...",
    image: "/legoDC.png",
    readTime: "6 min",
    date: "4 days ago",
    engagement: {
      likes: 709,
      comments: 16
    }
  },
  {
    author: {
      name: "In Predict by Iswarya Writes",
      image: "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
    },
    title: "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
    preview: "What if I told you that by this time next year, you could land a job that pays over $100,000 — and it won’t be threatened by AI?",
    image: "/oneWay.png",
    readTime: "7 min",
    date: "Jul 30",
    engagement: {
      likes: 37,
      comments: 165
    }
  },
  {
    author: {
      name: "In Clean Compiler",
      image: "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
    },
    title: "10 Java Collections Tricks Only Seniors Know",
    preview: "If you’ve been coding in Java for a while, you probably use List, Set, and Map every single day. But here’s the thing: most developers overlook some powerful tricks...",
    image: "/javaImage.png",
    readTime: "5 min",
    date: "3 days ago",
    engagement: {
      likes: 52,
      comments: 5
    }
  },
  {
    author: {
      name: "In The Generator by Jim the AI Whisperer",
      image: "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
    },
    title: "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
    preview: "Limiting output length reveals AI isn’t intelligent — it’s chatty!",
    image: "/cartoons.png",
    readTime: "6 min",
    date: "3 days ago",
    engagement: {
      likes: 206,
      comments: 36
    }
  }
];

export const staffPicks: StaffPicks[] = [
  {
    author: {
      name: "Zulie Brown",
      image: "/avatar.png",
      role: "In The Medium Handbook"
    },
    title: "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
    preview: "Practical tips from a strategist who turned Medium into a business tool.",
    date: "2 days ago",
    isStaffPick: true
  },
  {
    author: {
      name: "Jud Brewer MD PhD",
      image: "/profileAvatar.jpg"
    },
    title: "From “I Have To” to “I Get To”: How One Word Change Rewires Your Brain",
    preview: "A powerful mental shift that can transform motivation and productivity.",
    date: "5 days ago",
    isStaffPick: true
  },
  {
    author: {
      name: "Linh Nguyen",
      image: "/avatarCatoon.png"
    },
    title: "Golden Design Lessons from Tokyo Metro",
    preview: "What we can learn from the world’s most efficient transit system design.",
    date: "Sep 3",
    isStaffPick: true
  }
];

export const recommendedTopics: Topic[] = [
  { name: "Data Science", category: "recommended" },
  { name: "React", category: "recommended" },
  { name: "Coding", category: "recommended" },
  { name: "Mental Health", category: "recommended" },
  { name: "UX", category: "recommended" },
  { name: "Python", category: "recommended" },
  { name: "Productivity", category: "recommended" }
];

// Who to Follow
export const whoToFollow = [
  {
    name: "Dr. Derek Austin",
    role: "AI Content Engineer – I teach LLMs to think",
    image: "/avatarCatoon.png",
    url: "#"
  },
  {
    name: "ITNEXT Publication",
    role: "A platform for IT developers & software engineers",
    image: "/avatarCatoon.png",
    url: "#"
  },
  {
    name: "Oliver Foster",
    role: "Primarily proficient in the Java programming ecosystem",
    image: "/avatarCatoon.png",
    url: "#"
  }
];

// Reading List
export const readingList = {
  description:
    "Click the 🔖 on any story to easily add it to your reading list or a custom list that you can share.",
  helpLinks: [
    { text: "Help", url: "#" },
    { text: "Status", url: "#" },
    { text: "About", url: "#" },
    { text: "Careers", url: "#" },
    { text: "Press", url: "#" },
    { text: "Blog", url: "#" },
    { text: "Privacy", url: "#" },
    { text: "Rules", url: "#" },
    { text: "Terms", url: "#" },
    { text: "Text to speech", url: "#" }
  ]
};
