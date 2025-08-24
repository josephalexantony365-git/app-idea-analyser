import { Analysis } from '../components/AnalysisResults';

interface AppCategory {
  keywords: string[];
  baseAnalysis: Partial<Analysis>;
}

const APP_CATEGORIES: { [key: string]: AppCategory } = {
  fitness: {
    keywords: ['fitness', 'workout', 'exercise', 'gym', 'health', 'training', 'sport'],
    baseAnalysis: {
      feasibility: {
        score: 75,
        factors: [
          'High demand for health and fitness solutions',
          'Wearable device integration opportunities',
          'Strong retention potential through habit building',
          'Clear monetization paths'
        ],
        challenges: [
          'Highly competitive market with established players',
          'Need for accurate health data integration',
          'User motivation and retention challenges',
          'Potential regulatory considerations for health data'
        ]
      },
      techStack: {
        frontend: ['React Native', 'Flutter'],
        backend: ['Node.js', 'Express.js', 'GraphQL'],
        database: ['PostgreSQL', 'Redis'],
        additional: ['HealthKit/Google Fit', 'Push Notifications', 'Analytics', 'Payment Processing']
      },
      targetUsers: {
        primary: 'Health-conscious individuals aged 25-45 looking to improve their fitness',
        secondary: ['Personal trainers', 'Gym members', 'Athletes', 'Fitness enthusiasts'],
        demographics: ['Ages 25-45', 'Middle to upper income', 'Urban/suburban', 'Tech-savvy']
      },
      monetization: {
        primary: 'Freemium model with premium workout plans and features',
        alternatives: [
          'Subscription-based premium content',
          'In-app purchases for specialized programs',
          'Partnership with fitness equipment brands',
          'Personal trainer marketplace commission'
        ],
        revenueProjection: '$50K-200K annually within 2 years with 10K+ active users'
      }
    }
  },
  social: {
    keywords: ['social', 'community', 'sharing', 'connect', 'friends', 'network', 'chat'],
    baseAnalysis: {
      feasibility: {
        score: 60,
        factors: [
          'Strong network effects once critical mass is reached',
          'High user engagement potential',
          'Multiple monetization opportunities',
          'Viral growth possibilities'
        ],
        challenges: [
          'Extremely competitive market dominated by giants',
          'High user acquisition costs',
          'Content moderation and safety concerns',
          'Need for critical mass to be valuable'
        ]
      },
      techStack: {
        frontend: ['React', 'React Native', 'Next.js'],
        backend: ['Node.js', 'Socket.io', 'GraphQL', 'Microservices'],
        database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
        additional: ['CDN', 'Real-time messaging', 'Content moderation', 'Analytics', 'Push notifications']
      },
      targetUsers: {
        primary: 'Digital natives aged 16-35 seeking community and connection',
        secondary: ['Content creators', 'Influencers', 'Brands', 'Local businesses'],
        demographics: ['Ages 16-35', 'All income levels', 'Global', 'Mobile-first users']
      },
      monetization: {
        primary: 'Advertising revenue with user data insights',
        alternatives: [
          'Premium features and subscriptions',
          'Virtual gifts and tipping',
          'Marketplace commissions',
          'Brand partnerships and sponsored content'
        ],
        revenueProjection: '$100K-1M+ annually with 100K+ monthly active users'
      }
    }
  },
  productivity: {
    keywords: ['task', 'productivity', 'management', 'organize', 'planning', 'todo', 'efficiency'],
    baseAnalysis: {
      feasibility: {
        score: 85,
        factors: [
          'Clear value proposition and user need',
          'Straightforward monetization through subscriptions',
          'Lower development complexity',
          'Strong B2B market potential'
        ],
        challenges: [
          'Saturated market with many established solutions',
          'User habit formation can be difficult',
          'Feature creep temptation',
          'Balancing simplicity with functionality'
        ]
      },
      techStack: {
        frontend: ['React', 'Vue.js', 'React Native'],
        backend: ['Node.js', 'Express.js', 'REST API'],
        database: ['PostgreSQL', 'MongoDB'],
        additional: ['Real-time sync', 'Push notifications', 'Calendar integration', 'File storage']
      },
      targetUsers: {
        primary: 'Professionals and students seeking better organization and productivity',
        secondary: ['Small business owners', 'Project managers', 'Remote workers', 'Students'],
        demographics: ['Ages 22-50', 'College-educated', 'Knowledge workers', 'Urban professionals']
      },
      monetization: {
        primary: 'Subscription-based SaaS model with tiered pricing',
        alternatives: [
          'One-time purchase for basic version',
          'Team/enterprise licensing',
          'Integration marketplace revenue share',
          'Premium templates and add-ons'
        ],
        revenueProjection: '$100K-500K annually with 5K+ paying subscribers'
      }
    }
  },
  ecommerce: {
    keywords: ['shop', 'buy', 'sell', 'marketplace', 'store', 'commerce', 'purchase', 'product'],
    baseAnalysis: {
      feasibility: {
        score: 70,
      factors: [
          'Clear revenue model through transactions',
          'High scalability potential',
          'Multiple revenue streams available',
          'Growing e-commerce market'
        ],
        challenges: [
          'High competition from established platforms',
          'Complex payment and logistics integration',
          'Trust and security concerns',
          'Inventory and seller management complexity'
        ]
      },
      techStack: {
        frontend: ['React', 'Next.js', 'React Native'],
        backend: ['Node.js', 'Python/Django', 'Microservices'],
        database: ['PostgreSQL', 'MongoDB', 'Redis'],
        additional: ['Stripe/PayPal', 'Shipping APIs', 'Inventory management', 'Search engine', 'Analytics']
      },
      targetUsers: {
        primary: 'Online shoppers and small business owners looking for niche markets',
        secondary: ['Local artisans', 'Small retailers', 'Collectors', 'Specific interest communities'],
        demographics: ['Ages 25-55', 'Disposable income', 'Online shopping experience', 'Mobile users']
      },
      monetization: {
        primary: 'Transaction fees and commission on sales',
        alternatives: [
          'Seller subscription fees',
          'Listing fees for premium placement',
          'Advertising revenue from sellers',
          'White-label solutions for businesses'
        ],
        revenueProjection: '$200K-1M+ annually with $2M+ in transaction volume'
      }
    }
  },
  entertainment: {
    keywords: ['game', 'entertainment', 'fun', 'media', 'content', 'streaming', 'video', 'music'],
    baseAnalysis: {
      feasibility: {
        score: 65,
        factors: [
          'High engagement and retention potential',
          'Multiple monetization strategies available',
          'Viral sharing possibilities',
          'Global market appeal'
        ],
        challenges: [
          'Content creation and curation costs',
          'User attention span competition',
          'Platform dependency risks',
          'Copyright and licensing issues'
        ]
      },
      techStack: {
        frontend: ['React', 'Unity', 'React Native'],
        backend: ['Node.js', 'Python', 'CDN'],
        database: ['PostgreSQL', 'MongoDB', 'Redis'],
        additional: ['Video processing', 'Content delivery', 'Real-time features', 'Analytics', 'Social features']
      },
      targetUsers: {
        primary: 'Entertainment seekers aged 16-40 looking for engaging content',
        secondary: ['Content creators', 'Gamers', 'Casual users', 'Social media users'],
        demographics: ['Ages 16-40', 'All income levels', 'Mobile-first', 'Global audience']
      },
      monetization: {
        primary: 'In-app purchases and premium content subscriptions',
        alternatives: [
          'Advertising revenue',
          'Creator revenue sharing',
          'Virtual goods and currencies',
          'Brand partnerships and sponsorships'
        ],
        revenueProjection: '$75K-500K annually with 50K+ monthly active users'
      }
    }
  },
  education: {
    keywords: ['learn', 'education', 'course', 'study', 'teaching', 'skill', 'tutorial', 'training'],
    baseAnalysis: {
      feasibility: {
        score: 80,
        factors: [
          'Growing online education market',
          'Clear value proposition for users',
          'Subscription-based revenue model',
          'Content can be evergreen'
        ],
        challenges: [
          'Content creation costs and time',
          'User completion rates typically low',
          'Competition from free resources',
          'Credentialing and certification needs'
        ]
      },
      techStack: {
        frontend: ['React', 'Vue.js', 'React Native'],
        backend: ['Node.js', 'Python/Django', 'GraphQL'],
        database: ['PostgreSQL', 'MongoDB'],
        additional: ['Video hosting', 'Progress tracking', 'Assessment tools', 'Payment processing', 'Certificates']
      },
      targetUsers: {
        primary: 'Lifelong learners and professionals seeking skill development',
        secondary: ['Students', 'Career changers', 'Hobbyists', 'Professionals upskilling'],
        demographics: ['Ages 18-50', 'College-educated', 'Career-focused', 'Self-motivated learners']
      },
      monetization: {
        primary: 'Course sales and subscription-based access to content library',
        alternatives: [
          'Certification fees',
          'Corporate training licenses',
          'Tutoring marketplace commission',
          'Premium features and tools'
        ],
        revenueProjection: '$150K-750K annually with 1K+ paying students'
      }
    }
  }
};

const DEFAULT_ANALYSIS: Analysis = {
  feasibility: {
    score: 70,
    factors: [
      'Identifiable market need and target audience',
      'Reasonable technical complexity for MVP',
      'Potential for user engagement and retention',
      'Clear path to monetization'
    ],
    challenges: [
      'Market validation required before full development',
      'User acquisition and marketing costs',
      'Competition from existing solutions',
      'Technical implementation complexity'
    ]
  },
  techStack: {
    frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'REST API'],
    database: ['PostgreSQL', 'Redis'],
    additional: ['Authentication', 'Push Notifications', 'Analytics', 'Cloud Hosting']
  },
  timeline: {
    mvp: '3-4 months',
    fullVersion: '8-12 months',
    phases: [
      {
        name: 'Planning & Design',
        duration: '2-3 weeks',
        description: 'Requirements gathering, user research, wireframes, and UI/UX design'
      },
      {
        name: 'MVP Development',
        duration: '8-12 weeks',
        description: 'Core features, basic UI, user authentication, and essential functionality'
      },
      {
        name: 'Testing & Refinement',
        duration: '2-3 weeks',
        description: 'Bug fixes, performance optimization, user testing, and feedback integration'
      },
      {
        name: 'Launch & Iteration',
        duration: '4-6 weeks',
        description: 'App store submission, marketing launch, user onboarding, and feature iteration'
      }
    ]
  },
  targetUsers: {
    primary: 'Tech-savvy users aged 25-40 seeking digital solutions for daily needs',
    secondary: ['Early adopters', 'Mobile-first users', 'Problem-specific audience'],
    demographics: ['Ages 25-40', 'Middle income', 'Urban/suburban', 'Smartphone users']
  },
  monetization: {
    primary: 'Freemium model with premium features and subscriptions',
    alternatives: [
      'In-app purchases for premium content',
      'Advertising revenue',
      'Transaction-based fees',
      'B2B licensing opportunities'
    ],
    revenueProjection: '$50K-300K annually within 18 months with strong user adoption'
  },
  competitors: {
    direct: ['Category-specific established players'],
    indirect: ['General-purpose alternatives', 'Manual/offline solutions'],
    marketGap: 'Opportunity exists for differentiated approach with unique value proposition',
    differentiation: [
      'Superior user experience and interface design',
      'Unique feature set or approach',
      'Better performance or reliability',
      'Specialized focus on underserved niche'
    ]
  }
};

export function analyzeAppIdea(idea: string): Analysis {
  const lowerIdea = idea.toLowerCase();
  
  // Find matching category
  const matchingCategory = Object.entries(APP_CATEGORIES).find(([_, category]) =>
    category.keywords.some(keyword => lowerIdea.includes(keyword))
  );

  if (matchingCategory) {
    const [categoryName, categoryData] = matchingCategory;
    return mergeAnalysis(DEFAULT_ANALYSIS, categoryData.baseAnalysis, categoryName, idea);
  }

  return customizeDefaultAnalysis(DEFAULT_ANALYSIS, idea);
}

function mergeAnalysis(defaultAnalysis: Analysis, categoryAnalysis: Partial<Analysis>, category: string, idea: string): Analysis {
  const merged = {
    ...defaultAnalysis,
    ...categoryAnalysis,
    feasibility: {
      ...defaultAnalysis.feasibility,
      ...categoryAnalysis.feasibility
    },
    techStack: {
      ...defaultAnalysis.techStack,
      ...categoryAnalysis.techStack
    },
    timeline: {
      ...defaultAnalysis.timeline,
      ...categoryAnalysis.timeline
    },
    targetUsers: {
      ...defaultAnalysis.targetUsers,
      ...categoryAnalysis.targetUsers
    },
    monetization: {
      ...defaultAnalysis.monetization,
      ...categoryAnalysis.monetization
    },
    competitors: {
      ...defaultAnalysis.competitors,
      ...categoryAnalysis.competitors
    }
  };

  return customizeForSpecificIdea(merged, idea, category);
}

function customizeDefaultAnalysis(analysis: Analysis, idea: string): Analysis {
  // Customize based on idea complexity and scope
  const isComplex = /AI|machine learning|blockchain|AR|VR|realtime|streaming/.test(idea.toLowerCase());
  const isSocial = /social|community|sharing|connect/.test(idea.toLowerCase());
  const isMobile = /mobile|phone|camera|location|GPS/.test(idea.toLowerCase());

  if (isComplex) {
    analysis.feasibility.score -= 15;
    analysis.timeline.mvp = '4-6 months';
    analysis.timeline.fullVersion = '12-18 months';
    analysis.feasibility.challenges.push('Complex technology implementation requires specialized expertise');
  }

  if (isSocial) {
    analysis.feasibility.challenges.push('Network effects required for success');
    analysis.targetUsers.primary = 'Social media users seeking new ways to connect and share';
  }

  if (isMobile) {
    analysis.techStack.frontend = ['React Native', 'Flutter'];
    analysis.techStack.additional.push('Device APIs', 'Camera integration');
  }

  return analysis;
}

function customizeForSpecificIdea(analysis: Analysis, idea: string, category: string): Analysis {
  // Add idea-specific competitors based on category
  if (category === 'fitness') {
    analysis.competitors.direct = ['MyFitnessPal', 'Nike Training Club', 'Strava', 'Fitbit'];
    analysis.competitors.indirect = ['YouTube fitness channels', 'Personal trainers', 'Gym memberships'];
  } else if (category === 'social') {
    analysis.competitors.direct = ['Instagram', 'TikTok', 'Twitter', 'Discord'];
    analysis.competitors.indirect = ['Traditional social media', 'Messaging apps', 'Forums'];
  } else if (category === 'productivity') {
    analysis.competitors.direct = ['Todoist', 'Asana', 'Notion', 'Trello'];
    analysis.competitors.indirect = ['Google Workspace', 'Microsoft Office', 'Paper planners'];
  } else if (category === 'ecommerce') {
    analysis.competitors.direct = ['Amazon', 'eBay', 'Etsy', 'Shopify'];
    analysis.competitors.indirect = ['Physical stores', 'Social commerce', 'Classified ads'];
  } else if (category === 'entertainment') {
    analysis.competitors.direct = ['TikTok', 'YouTube', 'Netflix', 'Spotify'];
    analysis.competitors.indirect = ['Traditional media', 'Gaming platforms', 'Social media'];
  } else if (category === 'education') {
    analysis.competitors.direct = ['Coursera', 'Udemy', 'Khan Academy', 'Duolingo'];
    analysis.competitors.indirect = ['Traditional education', 'YouTube tutorials', 'Books'];
  }

  // Adjust timeline based on AI/ML features
  if (idea.toLowerCase().includes('ai') || idea.toLowerCase().includes('machine learning')) {
    analysis.timeline.mvp = '4-6 months';
    analysis.timeline.fullVersion = '10-15 months';
    analysis.techStack.backend.push('Python', 'TensorFlow', 'ML APIs');
    analysis.feasibility.challenges.push('AI model training and data requirements');
  }

  return analysis;
}