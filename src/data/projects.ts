import BlogglyScreenshot from '../assets/projects screenshots/blogggly.png';
import BlogglyDarkScreenshot from '../assets/projects screenshots/blogggly-dark.png';
import MemorizeScreenshot from '../assets/projects screenshots/memorize.png';
import ShopplyScreenshot from '../assets/projects screenshots/shopply.png';
import MiniTwitchScreenshot from '../assets/projects screenshots/mini-twitch.png';
import ChatScreenshot from '../assets/projects screenshots/chat.png';
import MonopolyFriendsScreenshot from '../assets/projects screenshots/monopolyfriends.png';
import CocktailsAndChillScreenshot from '../assets/projects screenshots/cocktailsandchill.png';
import PortfolioScreenshot from '../assets/projects screenshots/portfolio.png';
import PortfolioDarkScreenshot from '../assets/projects screenshots/portfolio-dark.png';

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
    name: 'Monopoly Friends (WIP)',
    description: 'Multiplayer Monopoly Game',
    screenshot: MonopolyFriendsScreenshot,
    frontend: ['React', 'Redux', 'Material-UI', 'WebSockets'],
    backend: ['Node.js', 'GraphQL', 'WebSockets'],
    db: ['MongoDB'],
    href: 'https://monopolyfriends.com',
  },
  {
    name: 'Cocktails And Chill',
    description: 'Explorer cocktails recipes',
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
    href: '',
    github: 'https://asaf-aviv.github.io/portfolio',
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
