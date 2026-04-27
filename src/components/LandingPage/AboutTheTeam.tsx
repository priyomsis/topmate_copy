'use client';

import { useEffect, useState, memo, useRef } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  about: string;
  image: string;
  email: string;
  linkedin: string;
  instagram?: string;
}

type Department = 'tech' | 'marketing' | 'founders' | 'outreach' | 'GD' | null;
type DepartmentKey = Exclude<Department, null>;

const teamData: Record<DepartmentKey, TeamMember[]> = {
  tech: [
    {
      name: 'Alex Rivera',
      role: 'Full Stack Engineer',
      description: 'Building scalable systems with a focus on performance and developer experience.',
      about: 'Alex is a veteran engineer with over 8 years of experience in distributed systems and cloud architecture. Passionate about building resilient and high-performance applications.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      email: 'alex@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Jordan Smith',
      role: 'Frontend Architect',
      description: 'Creating delightful user experiences through clean code and modern design patterns.',
      about: 'Jordan specializes in modern frontend technologies and design systems. With a keen eye for detail, they ensure every pixel and interaction is perfectly crafted for the user.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      email: 'jordan@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
  ],
  marketing: [
    {
      name: 'Sarah Chen',
      role: 'Growth Marketing',
      description: 'Scaling Tpmt by connecting with creators and building a vibrant community.',
      about: 'Sarah leads our community initiatives, focusing on long-term relationships with global creators. Her strategy involves authentic engagement and scalable growth patterns.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      email: 'sarah@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
  ],
  outreach: [
    {
      name: 'Michael Ross',
      role: 'Partnerships Lead',
      description: 'Forging meaningful relationships with industry leaders and creators worldwide.',
      about: 'Michael has a background in strategic partnerships and business development. He is dedicated to expanding the Tpmt ecosystem through high-impact collaborations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'michael@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
  ],
  founders: [
    {
      name: 'David Carter',
      role: 'Co-Founder & CEO',
      description: 'Visionary leader dedicated to empowering the next generation of global creators.',
      about: 'David founded Tpmt with the mission to democratize expertise. He brings over a decade of leadership experience in the creator economy and tech sectors.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      email: 'david@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Elena Vance',
      role: 'Co-Founder & CTO',
      description: 'Driven by technology and design, Elena leads the engineering efforts at Tpmt.',
      about: 'Elena is a technical visionary who balances complex architecture with intuitive user experience. She leads our core platform development with a focus on innovation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      email: 'elena@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
  ],
  GD: [
    {
      name: 'Lily Thorne',
      role: 'Brand Designer',
      description: 'Crafting the visual identity of Tpmt with a focus on minimalism and impact.',
      about: 'Lily is the creative force behind Tpmt brand. Her design philosophy revolves around simplicity, accessibility, and emotional connection with users.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      email: 'lily@tpmt.com',
      linkedin: '#',
      instagram: '#',
    },
  ],
};

const departmentSections: Array<{ key: DepartmentKey; title: string }> = [
  { key: 'founders', title: 'FOUNDERS' },
  { key: 'tech', title: 'ENGINEERING' },
  { key: 'marketing', title: 'MARKETING' },
  { key: 'outreach', title: 'OUTREACH' },
  { key: 'GD', title: 'DESIGN' },
];

const TeamMemberCard = memo(({ member }: { member: TeamMember }) => {
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!cardInnerRef.current) return;
    gsap.to(cardInnerRef.current, {
      rotateY: isFlipped ? 180 : 0,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: true,
    });
  }, [isFlipped]);

  return (
    <div className="perspective-1000 w-full aspect-[3/4] group">
      <div
        ref={cardInnerRef}
        className="relative w-full h-full will-change-transform cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full bg-gray-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="300px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <h3 className="text-lg font-bold text-white text-center">{member.name}</h3>
              <p className="text-sm text-primary text-center font-medium">{member.role}</p>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 rotate-y-180 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">About {member.name.split(' ')[0]}</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">{member.about}</p>
            <div className="flex gap-4">
              <a href={member.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${member.email}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
TeamMemberCard.displayName = 'TeamMemberCard';

const AboutTheTeam = () => {
  const [activeDepartment, setActiveDepartment] = useState<Department>(null);
  const panelRefs = useRef<Record<DepartmentKey, HTMLDivElement | null>>({ founders: null, tech: null, marketing: null, outreach: null, GD: null });
  const lineRefs = useRef<Record<DepartmentKey, HTMLDivElement | null>>({ founders: null, tech: null, marketing: null, outreach: null, GD: null });
  const titleRefs = useRef<Record<DepartmentKey, HTMLHeadingElement | null>>({ founders: null, tech: null, marketing: null, outreach: null, GD: null });

  useEffect(() => {
    departmentSections.forEach(({ key }) => {
      const isOpen = activeDepartment === key;
      const panel = panelRefs.current[key];
      const line = lineRefs.current[key];
      const title = titleRefs.current[key];

      if (panel) {
        gsap.to(panel, {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 24 : 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (line) {
        gsap.to(line, {
          width: isOpen ? '100%' : '20px',
          backgroundColor: isOpen ? '#ef4444' : '#e5e7eb',
          duration: 0.3,
        });
      }

      if (title) {
        gsap.to(title, {
          color: isOpen ? '#ef4444' : '#9ca3af',
          x: isOpen ? 10 : 0,
          duration: 0.2,
        });
      }
    });
  }, [activeDepartment]);

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The people behind <br />
            <span className="text-primary italic">Tpmt</span>
          </h2>
        </header>

        <div className="space-y-8">
          {departmentSections.map((dept) => (
            <div key={dept.key} className="border-b border-gray-100 pb-8">
              <button
                onClick={() => setActiveDepartment(activeDepartment === dept.key ? null : dept.key)}
                className="w-full flex items-center gap-4 group"
              >
                <div ref={(el) => { lineRefs.current[dept.key] = el; }} className="h-1 bg-gray-200 rounded-full transition-all" />
                <h3
                  ref={(el) => { titleRefs.current[dept.key] = el; }}
                  className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors"
                >
                  {dept.title}
                </h3>
              </button>
              <div
                ref={(el) => { panelRefs.current[dept.key] = el; }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                {teamData[dept.key].map((member, idx) => (
                  <TeamMemberCard key={idx} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(AboutTheTeam);
