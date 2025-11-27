import { motion } from "framer-motion";
import billingImage from "@assets/stock_images/modern_dashboard_int_55977e6a.jpg";
import salesforceImage from "@assets/stock_images/business_team_meetin_9d4f3dc3.jpg";
import marketingImage from "@assets/stock_images/analytics_dashboard__cda96c0e.jpg";
import designSystemImage from "@assets/stock_images/figma_design_system__75037db1.jpg";
import connectorImage from "@assets/stock_images/logisense-salesforce-connector.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32"
      >
        <div className="max-w-4xl">
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-sm font-medium text-neutral-500 tracking-wide uppercase" data-testid="hero-role">
              UX Designer × Marketer
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl lg:text-8xl font-light text-neutral-900 leading-none mb-8 tracking-tight"
            data-testid="hero-title"
          >
            Bridging UX and Marketing
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-2xl lg:text-3xl text-neutral-600 font-light leading-relaxed max-w-3xl"
            data-testid="hero-description"
          >
            Designing experiences that solve user needs and deliver business results
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-neutral-200">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6" data-testid="about-label">
              Background
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed mb-6">
              I've always been drawn to the moment when a complicated process suddenly makes sense.
            </p>
            <p className="text-xl text-neutral-700 leading-relaxed">
              That curiosity has shaped my journey across marketing, research, and user experience/product design.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3" data-testid="about-marketing-title">Marketing</h3>
              <p className="text-neutral-600 leading-relaxed">
                Gave me a deep understanding of how people think, make decisions, and respond to messaging
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3" data-testid="about-ux-title">UX Design</h3>
              <p className="text-neutral-600 leading-relaxed">
                Allows me to turn that understanding into intuitive, meaningful product experiences that drive business outcomes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="bg-neutral-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-12">
              Endorsements
            </h2>
           <div className="grid lg:grid-cols-2 gap-12">
            <blockquote className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <p className="text-lg text-neutral-700 leading-relaxed italic mb-6">
                "Excellent written and verbal communication skills... Prioritize, self-manage, and collaborate effectively in distributed teams."
              </p>
              <footer className="text-sm font-medium text-neutral-900">
                — Sarah Major, Manager, Human Resources
              </footer>
            </blockquote>
            <blockquote className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <p className="text-lg text-neutral-700 leading-relaxed italic mb-6">
                "Bridging technical and business teams by translating complex integration and reporting requirements into actionable Salesforce configurations and solutions."
              </p>
              <footer className="text-sm font-medium text-neutral-900">
                — Employment Reference Letter, LogiSense
              </footer>
            </blockquote>
            <blockquote className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <p className="text-lg text-neutral-700 leading-relaxed italic mb-6">
                "Applying Salesforce best practices in UI design, workflow optimization, and reporting, influencing product design and usability standards within the organization."
              </p>
              <footer className="text-sm font-medium text-neutral-900">
                — Employment Reference Letter, LogiSense
              </footer>
            </blockquote>
            <blockquote className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <p className="text-lg text-neutral-700 leading-relaxed italic mb-6">
                "Developing detailed research questions and corresponding well-thought-out research plans aligned with the product roadmap."
              </p>
              <footer className="text-sm font-medium text-neutral-900">
                — Employment Reference Letter, LogiSense
              </footer>
            </blockquote>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/portfolio/louie-conceicao-reference.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors border-b border-neutral-300 hover:border-neutral-900 pb-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              View Signed Reference Letter (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-3">
            Featured Work
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Real projects demonstrating my approach: listening deeply, asking the right questions, and designing with intention
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Project: Salesforce Connector App - NEW */}
           <ProjectCard 
            title="LogiSense Salesforce Connector"
            category="Product Management & Development"
            description="Led the development of LogiSense's first Salesforce-native connector application. Collaborated with external development partners to enable seamless integration with the billing platform, bridging technical constraints with business goals."
            tags={["Product Leadership", "Vendor Management", "System Integration"]}
            impact="Seamless Platform Integration"
            image={connectorImage}
            id="connector-app"
          />

          {/* Project: Design System - NEW */}
          <ProjectCard 
            title="Design System & Operations"
            category="Design Ops"
            description="Established scalable design infrastructure by building out a comprehensive Figma library and templates. This supported rapid wireframing and prototype development, ensuring consistency across agile development teams and reducing time-to-value."
            tags={["Design Systems", "Figma Library", "Agile Process"]}
            impact="Improved Time-to-Value"
            image={designSystemImage}
            id="design-system"
          />

          {/* Project 1: B2B Billing Platform */}
          <ProjectCard 
            title="B2B Billing Platform UX"
            category="Product Design"
            description="Led user experience initiatives for an enterprise billing platform. Conducted customer workshops to understand user persona needs, created detailed user flows and journey maps, and rapidly prototyped solutions validated with customers using agile practices."
            tags={["User Research", "Customer Workshops", "Journey Mapping"]}
            impact="Enhanced User Experience"
            image={billingImage}
            id="b2b-billing"
          />

          {/* Project 2: Salesforce CPQ */}
          <ProjectCard 
            title="Salesforce CPQ Implementation"
            category="Marketing & Sales Operations"
            description="Partnered with Sales and Marketing to implement a new CPQ (Configure, Price, Quote) solution. Served as lead SME for integration projects involving Conga Composer and contract management systems, streamlining document generation and approval processes."
            tags={["Sales Automation", "Workflow Design", "Conga Composer"]}
            impact="Streamlined Quote-to-Contract"
            image={salesforceImage}
            id="salesforce-cpq"
          />

          {/* Project 3: Marketing Campaign Tracking */}
          <ProjectCard 
            title="Marketing Campaign Tracking System"
            category="Marketing & Analytics"
            description="Supported Marketing in setting up campaign tracking and external system integrations. Designed reporting dashboards and data flows that ensured accurate lead attribution and marketing performance analysis, enabling data-driven decision-making."
            tags={["Data Visualization", "Analytics Dashboard", "System Integration"]}
            impact="Data-Driven Decision Making"
            image={marketingImage}
            id="marketing-tracking"
          />
        </div>
      </section>

      {/* Approach Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-neutral-200">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
                My Approach
             </h2>
             <p className="text-3xl lg:text-4xl font-light text-neutral-900 leading-tight">
                I'm motivated by simplifying the complex and creating experiences that feel effortless for the people who use them, while ensuring they deliver real impact for the business.
             </p>
          </div>
          <div className="space-y-10">
             <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Listen Deeply</h3>
                <p className="text-neutral-600 text-lg">Uncover real user needs through research and empathy</p>
             </div>
             <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Ask Right Questions</h3>
                <p className="text-neutral-600 text-lg">Challenge assumptions to find the root problem</p>
             </div>
             <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Design with Intent</h3>
                <p className="text-neutral-600 text-lg">Create solutions that balance user needs and business goals</p>
             </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-neutral-200">
         <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
                Get in Touch
            </h2>
            <p className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-12">
              I'm always interested in new opportunities to create meaningful experiences that drive results
            </p>
            <a 
              href="https://www.linkedin.com/in/louieconceicao/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-300 rounded-sm text-neutral-900 font-medium hover:bg-neutral-50 transition-colors"
            >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
               </svg>
               LinkedIn
            </a>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
             <p className="text-neutral-500 text-sm">
                &copy; 2025 · Louie Conceicao · UX Design x Marketing · Built to drive results
             </p>
          </div>
      </footer>
    </div>
  );
}

import { useLocation } from "wouter";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  id: string;
}

function ProjectCard({ title, category, description, tags, impact, image, id }: ProjectCardProps) {
  const [_, setLocation] = useLocation();
  
  return (
    <motion.div 
      className="project-card group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      data-testid={`project-card-${id}`}
      onClick={() => setLocation(`/case-study/${id}`)}
    >
      <div className="relative overflow-hidden bg-neutral-200 rounded-sm mb-8 aspect-[16/10]">
        <img 
          src={image} 
          alt={title}
          className="project-image w-full h-full object-cover"
          data-testid={`img-${id}`}
        />
        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-4 mb-4">
            <h3 className="text-3xl lg:text-4xl font-light text-neutral-900" data-testid={`title-${id}`}>
              {title}
            </h3>
          </div>
          
          <p className="text-sm text-neutral-500 mb-4 uppercase tracking-wide">
            {category}
          </p>
          
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-neutral-600 border border-neutral-300 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-sm text-neutral-500 mb-2 uppercase tracking-wide">Impact</div>
            <div className="text-4xl font-light text-neutral-900">{impact}</div>
          </div>
          
          <button 
            className="flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-4 transition-all"
            data-testid={`btn-case-study-${id}`}
            onClick={(e) => {
              e.stopPropagation();
              setLocation(`/case-study/${id}`);
            }}
          >
            View Case Study
            <svg className="project-arrow w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
