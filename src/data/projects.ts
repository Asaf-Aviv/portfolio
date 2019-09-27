import BlogglyScreenshot from '../assets/projects screenshots/blogggly.jpg';
import BlogglyDarkScreenshot from '../assets/projects screenshots/blogggly-dark.jpg';
import MemorizeScreenshot from '../assets/projects screenshots/memorize.jpg';
import ShopplyScreenshot from '../assets/projects screenshots/shopply.jpg';
import MiniTwitchScreenshot from '../assets/projects screenshots/mini-twitch.jpg';
import ChatScreenshot from '../assets/projects screenshots/chat.jpg';
import MonopolyFriendsScreenshot from '../assets/projects screenshots/monopolyfriends.jpg';
import CocktailsAndChillScreenshot from '../assets/projects screenshots/cocktailsandchill.jpg';
import PortfolioScreenshot from '../assets/projects screenshots/portfolio.jpg';
import PortfolioDarkScreenshot from '../assets/projects screenshots/portfolio-dark.jpg';

export interface ProjectCardProps {
  name: string;
  description: string;
  screenshot: string;
  darkScreenshot?: string;
  frontend: string[];
  backend?: string[];
  db?: string[];
  href: string;
  github?: string;
}

const projects: ProjectCardProps[] = [
  {
    name: 'Monopoly Friends',
    description: 'Multiplayer Monopoly Game',
    screenshot: MonopolyFriendsScreenshot,
    frontend: ['React', 'Redux', 'Material-UI', 'WebSockets'],
    backend: ['Node.js', 'GraphQL', 'WebSockets'],
    db: ['MongoDB'],
    href: 'https://monopolyfriends.com',
  },
  {
    name: 'Cocktails And Chill',
    description: 'Explore cocktails recipes',
    screenshot: CocktailsAndChillScreenshot,
    frontend: ['React', 'Redux', 'ant design'],
    href: 'https://cocktailsandchill.com',
    github: 'https://github.com/Asaf-Aviv/cocktails-n-chill/',
  },
  {
    name: 'Blogggly',
    description: 'Platform for bloggers',
    screenshot: BlogglyScreenshot,
    darkScreenshot: BlogglyDarkScreenshot,
    frontend: ['React', 'SASS', 'WebSockets'],
    backend: ['Node.js', 'GraphQL', 'WebSockets'],
    db: ['MongoDB'],
    href: 'https://blogggly.com/',
    github: 'https://github.com/Asaf-Aviv/blogggly',
  },
  {
    name: 'Memorize',
    description: 'Memory game',
    screenshot: MemorizeScreenshot,
    frontend: ['React', 'SASS'],
    href: 'https://react-memorize.herokuapp.com/',
    github: 'https://github.com/Asaf-Aviv/memorize',
  },
  {
    name: 'Portfolio',
    description: 'My Portfolio',
    screenshot: PortfolioScreenshot,
    darkScreenshot: PortfolioDarkScreenshot,
    frontend: ['React', 'SASS'],
    href: 'https://asaf-aviv.github.io/portfolio',
    github: 'https://github.com/Asaf-Aviv/portfolio',
  },
  {
    name: 'Shopply',
    description: 'Shopping app',
    screenshot: ShopplyScreenshot,
    frontend: ['React', 'Redux', 'SASS'],
    backend: ['Node.js'],
    db: ['MongoDB'],
    href: 'https://shopply-demo.herokuapp.com/',
    github: 'https://github.com/Asaf-Aviv/shopping-site',
  },
  {
    name: 'Mini Twitch',
    description: 'Redesign of twitch UI',
    screenshot: MiniTwitchScreenshot,
    frontend: ['React', 'SASS'],
    href: 'https://mini-twitch.herokuapp.com/',
    github: 'https://github.com/Asaf-Aviv/mini-twitch',
  },
  {
    name: 'Chat',
    description: 'Chat app',
    screenshot: ChatScreenshot,
    frontend: ['React', 'Redux', 'SASS', 'WebSockets'],
    backend: ['Node.js', 'WebSockets'],
    href: 'https://react-chat-app-2467.herokuapp.com/',
    github: 'https://github.com/Asaf-Aviv/chat-v2',
  },
];

export default projects;
