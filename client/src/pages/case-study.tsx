import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import billingImage from "@assets/stock_images/modern_dashboard_int_55977e6a.jpg";
import salesforceImage from "@assets/stock_images/business_team_meetin_9d4f3dc3.jpg";
import marketingImage from "@assets/stock_images/analytics_dashboard__cda96c0e.jpg";
import designSystemImage from "@assets/stock_images/figma_design_system__75037db1.jpg";
import connectorImage from "@assets/stock_images/logisense-salesforce-connector.jpg";
import workshopImage from "@assets/stock_images/collaborative_worksh_2595f350.jpg";
import uiImage from "@assets/stock_images/clean_user_interface_e68efabf.jpg";
import wireframeImage from "@assets/stock_images/ux_design_wireframe__2089c48a.jpg";

const projects = {
  "connector-app": {
    title: "LogiSense Salesforce Connector",
    role: "Product Lead & UX",
    description:
      "Led the development of LogiSense's first Salesforce-native connector application. Collaborated with external development partners to enable seamless integration with the billing platform.",
    myRole: [
      "As Product Lead & UX Designer, I defined product direction, collaborated with engineering, drove cross-team alignment, managed vendor delivery, and designed the full configuration experience for Salesforce admins.",
    ],
    challenge:
      "LogiSense needed a native Salesforce presence to reduce friction for sales teams and improve data synchronization reliability. The existing solution was fragile and required constant maintenance.",
    approach: [
      "Conducted stakeholder interviews with Sales and Support teams to identify pain points.",
      "Defined technical requirements and API constraints with the engineering team.",
      "Managed the vendor relationship, running weekly sprint reviews.",
      "Designed the configuration UI to be familiar to Salesforce admins.",
    ],
    solution: [
      "Designed a Salesforce-native configuration interface aligned with admin expectations.",
      "Defined sync rules, validation flows, and error-handling states.",
      "Created a simplified setup experience that minimized dependency on technical resources.",
    ],
   
    results: [
      "Launched on Salesforce AppExchange.",
      <div key="kb">
        Application documentation and screenshots:{" "}
        <a
          href="https://learn.logisense.com/docs/1511653389"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Logisense Knowledge Base
        </a>
      </div>,
      "Enabled users to sync data reliably without developer intervention, significantly lowering integration-related support overhead.",
      "Enabled 2-way real-time synchronization of account, contact, opportunity, and order data between Salesforce and LogiSense Billing platform.",
    ],
    keyLearnings: [
       "Deepened understanding of Salesforce admin workflows and platform constraints.",
      "Learned how to manage external vendors while maintaining product quality and UX consistency.",
      "Reinforced the importance of early cross-team alignment on data models and sync logic.",
    ],
    image: connectorImage,
    tags: ["Product Leadership", "Vendor Management", "System Integration"],
  },
  "design-system": {
    title: "Design System & Operations",
    role: "Design Ops Lead",
    description:
      "Established scalable design infrastructure by building out a comprehensive Figma library and templates.",
    challenge:
      "Inconsistent UI patterns across products were slowing down development and confusing users. There was no single source of truth for design components.",
    approach: [
      "Audited existing application interface to inventory common patterns.",
      "Built a comprehensive Figma component library using atomic design principles.",
      "Created documentation and usage guidelines for developers.",
      "Established a contribution workflow for new components.",
    ],
    results: [
      "Reduced wireframing time by ~60% for new features.",
      "Improved designer-developer handoff efficiency.",
      "Achieved visual consistency across product.",
    ],
    image: designSystemImage,
    processImages: [uiImage, wireframeImage],
    tags: ["Design Systems", "Figma Library", "Agile Process"],
  },
  "b2b-billing": {
    title: "B2B Billing Platform UX",
    role: "Senior UX Designer",
    description: "Forget the before.",
    challenge:
      "Although a previous version of the billing UI existed, I was asked to completely disregard it and start from scratch. The legacy interface had grown organically over time, was difficult to navigate, and didn’t reflect the future direction of the product. This meant treating the project not as a redesign, but as a ground-up rethink of the entire billing experience. The challenge was to take deeply complex billing workflows and design a new interface that was intuitive, scalable, and easy for non-technical users to understand.",
    approach: [
      "Define new mental models",
      "Create new workflow structures.",
      "Build clear, visual relationships between complex objects.",
      "Reduce cognitive load across multi-step configurations.",
      "Ensure the UI aligned with both technical constraints and business goals.",
    ],
    results: [
      "Established the interaction patterns and workflow architecture that the product now builds on for future enhancements.",
      "Created a unified interface system that improved clarity and reduced cognitive load, making complex billing tasks approachable for non-technical users.",
      "Delivered high-fidelity prototypes that aligned engineering, product, and customer-facing teams, reducing misunderstandings and accelerating development readiness.",
      "Developed user personas and task flows that directly shaped the product’s structure, ensuring that each screen and workflow mapped to real user needs and day-to-day billing behaviors.",
    ],
    image: billingImage,
    processImages: [workshopImage, wireframeImage],
    tags: ["User Research", "Customer Workshops", "Journey Mapping"],
  },
  "salesforce-cpq": {
    title: "Salesforce CPQ Implementation",
    role: "UX & CRM SME",
    description:
      "Partnered with Sales and Marketing to implement a new CPQ solution. Streamlined quote-to-contract efficiency.",
    challenge:
      "The sales quoting process was manual and error-prone, resulting in long sales cycles and incorrect pricing.",
    approach: [
      "Mapped the entire quote-to-cash process with Sales Operations.",
      "Configured Salesforce CPQ to enforce pricing rules automatically.",
      "Designed custom quote templates using Conga Composer.",
      "Trained the global sales team on the new workflow.",
    ],
    results: [
      "Reduced quote generation time from days to minutes.",
      "Eliminated pricing errors in contracts.",
      "Streamlined approval workflows.",
      "Automated renewal process.",
    ],
    image: salesforceImage,
    processImages: [workshopImage, uiImage],
    tags: ["Sales Automation", "Workflow Design", "Conga Composer"],
  },
  "marketing-tracking": {
    title: "Marketing Campaign Tracking System",
    role: "Marketing Operations",
    description:
      "Supported Marketing in setting up campaign tracking and external system integrations. Designed reporting dashboards.",
    challenge:
      "Marketing spend was difficult to attribute to revenue. Data was siloed in different tools, making ROI analysis impossible.",
    approach: [
      "Integrated marketing automation platform with Salesforce.",
      "Designed a unified data model for campaign attribution.",
      "Built real-time dashboards for executive reporting.",
    ],
    results: [
      "Achieved 100% visibility into marketing pipeline contribution.",
      "Enabled data-driven budget allocation.",
      "Automated weekly performance reporting.",
    ],
    image: marketingImage,
    processImages: [uiImage, workshopImage],
    tags: ["Data Visualization", "Analytics Dashboard", "System Integration"],
  },
};

export default function CaseStudy() {
  const [match, params] = useRoute("/case-study/:id");
  const [location, setLocation] = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params || !projects[params.id as keyof typeof projects]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  const project = projects[params.id as keyof typeof projects];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Projects
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-4 mb-8 items-center text-sm text-neutral-500 uppercase tracking-wide font-medium">
            <span>{project.role}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-light text-neutral-900 mb-8 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-neutral-600 border border-neutral-300 px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[21/9] bg-neutral-200 rounded-sm overflow-hidden mb-20"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-12 space-y-24">
        {/* Challenge */}
        <section>
          <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
            The Challenge
          </h2>
          <p className="text-2xl font-light text-neutral-800 leading-relaxed">
            {project.challenge}
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
            The Solution
          </h2>
          <p className="text-2xl font-light text-neutral-800 leading-relaxed">
            {project.solution}
          </p>
        </section>

        {/* Approach */}
        <section className="grid lg:grid-cols-12 gap-12 border-t border-neutral-200 pt-20">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
              The Approach
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-6">
              {project.approach.map((item, i) => (
                <li key={i} className="flex gap-6 items-start group">
                  <span className="text-neutral-300 font-light text-xl group-hover:text-neutral-900 transition-colors">
                    0{i + 1}
                  </span>
                  <p className="text-lg text-neutral-700 leading-relaxed pt-1">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visuals */}
        {project.processImages?.length > 0 && (
          <section className="bg-neutral-100 p-8 lg:p-12 rounded-sm -mx-6 lg:-mx-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {project.processImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden relative group"
                >
                  <img
                    src={img}
                    alt={`Process Artifact ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Results */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
              The Results
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8">
              {project.results.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-neutral-200 pl-6 py-2"
                >
                  {typeof item === "string" ? (
                    <p className="text-xl text-neutral-800 font-light">{item}</p>
                  ) : (
                    <div className="text-xl text-neutral-800 font-light">{item}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="grid lg:grid-cols-12 gap-12 border-t border-neutral-200 pt-20">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
              Key Learnings
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-6">
              {project.keyLearnings.map((item, i) => (
                <li key={i} className="flex gap-6 items-start group">
                  <span className="text-neutral-300 font-light text-xl group-hover:text-neutral-900 transition-colors">
                    0{i + 1}
                  </span>
                  <p className="text-lg text-neutral-700 leading-relaxed pt-1">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
