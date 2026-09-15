import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiNodedotjs, 
  SiLaravel, 
  SiFlutter, 
  SiMysql, 
  SiPostgresql, 
  SiGit,
  SiN8N,
  SiOpenai
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiN8N />, title: "n8n", href: "https://n8n.io" },
  { node: <SiOpenai />, title: "AI Automation", href: "https://openai.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

export default function Toolsloop() {
  return (
    <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0a0a0a"
        ariaLabel="Technology Stack"
      />
    </div>
  );
}
