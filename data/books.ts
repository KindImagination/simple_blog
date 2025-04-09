// Define book interface
export interface Book {
  slug: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  progress: number;
  startDate: string;
  expectedFinishDate: string;
  description: string;
  thoughts: string;
  keyTakeaways: string[];
  categories: string[];
}

// Book data collection
export const books: Book[] = [
  {
    slug: 'getting-things-done',
    title: 'Getting Things Done',
    author: 'David Allen',
    coverImage: '/images/Get_Things_Done.jpg',
    rating: 4,
    progress: 63,
    startDate: 'March 15, 2023',
    expectedFinishDate: 'May 20, 2023',
    description: '"Getting Things Done" offers a practical framework for organizing tasks and managing workflow. It introduces methods to capture, clarify, organize, reflect, and engage with your work. The methodology focuses on getting tasks out of your mind and into a reliable system.',
    thoughts: 'This book has completely changed how I approach productivity. The GTD system has helped me manage my workload more effectively and reduced my stress levels significantly.',
    keyTakeaways: [
      'Capture everything that has your attention in a trusted system outside your mind',
      'Clarify what each item means and what action is needed',
      'Organize results into appropriate categories',
      'Reflect on and review your tasks regularly',
      'Engage with your tasks based on context, time, energy, and priority'
    ],
    categories: ['Productivity', 'Self-Improvement', 'Time Management'],
  },
]; 