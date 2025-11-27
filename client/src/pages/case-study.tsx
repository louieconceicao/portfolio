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
    solution: [
      "Implemented a central Figma library for components and templates.",
      "Standardized naming conventions and design tokens for consistency.",
      "Integrated component usage guidelines directly into development handoff.",
    ],
    results: [
      "Reduced wireframing time by ~60% for new features.",
      "Improved designer-developer handoff efficiency.",
      "Achieved visual consistency across product.",
    ],
    keyLearnings: [
      "Scaling design systems requires strong governance and documentation.",
      "Early collaboration with engineering ensures components are practical and reusable.",
      "Continuous audits are essential to maintain consistency as products evolve.",
    ],
    image: designSystemImage,
    processImages: [uiImage, wireframeImage],
    tags: ["Design Systems", "Figma Library", "Agile Process"],
  },
  "b2b-billing": {
    title: "B2B Billing Platform UX",
    role: "Senior UX Designer",
    description:
      "Reimagined the entire billing experience, designing a new interface from the ground up to make complex workflows intuitive for non-technical users.",
    challenge:
      "Although a previous version of the billing UI existed, I was asked to completely disregard it and start from scratch. The legacy interface had grown organically over time, was difficult to navigate, and didn’t reflect the future direction of the product.",
    approach: [
      "Define new mental models",
      "Create new workflow structures.",
      "Build clear, visual relationships between complex objects.",
      "Reduce cognitive load across multi-step configurations.",
      "Ensure the UI aligned with both technical constraints and business goals.",
    ],
    solution: [
      "Created a visual workflow system for complex billing tasks.",
      "Designed modular interface components to support scalability.",
      "Validated designs with user testing sessions and iterative improvements.",
    ],
    results: [
      "Established interaction patterns and workflow architecture for future enhancements.",
      "Created a unified interface system improving clarity and reducing cognitive load.",
      "Delivered high-fidelity prototypes aligning engineering, product, and customer teams.",
      "Developed user personas and task flows shaping product structure.",
    ],
    keyLearnings: [
      "Understanding user mental models is critical in complex enterprise applications.",
      "Iterative testing and validation reduces development misalignment.",
      "Workflow-first design simplifies complex multi-step processes.",
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
    solution: [
      "Automated pricing rules and approval workflows within Salesforce CPQ.",
      "Created standardized templates for quotes and contracts.",
      "Developed training materials to ensure smooth adoption by sales teams.",
    ],
    results: [
      "Reduced quote generation time from days to minutes.",
      "Eliminated pricing errors in contracts.",
      "Streamlined approval workflows.",
      "Automated renewal process.",
    ],
    keyLearnings: [
      "Documenting business rules upfront prevents errors in automated systems.",
      "Close collaboration with sales teams ensures practical solutions.",
      "User training is crucial for adoption of new CRM features.",
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
    solution: [
      "Implemented a centralized campaign tracking database.",
      "Designed automated dashboards to visualize ROI and marketing performance.",
      "Connected disparate tools to provide a single source of truth.",
    ],
    results: [
      "Achieved 100% visibility into marketing pipeline contribution.",
      "Enabled data-driven budget allocation.",
      "Automated weekly performance reporting.",
    ],
    keyLearnings: [
      "Data centralization simplifies cross-team reporting.",
      "Visual dashboards improve stakeholder decision-making.",
      "Integrating multiple systems reduces manual work and errors.",
    ],
    image: marketingImage,
    processImages: [uiImage, workshopImage],
    tags: ["Data Visualization", "Analytics Dashboard", "System Integration"],
  },
};

export default function CaseStudy() {
  const [match, params] = useRoute("/case-study/:id");
  const [location, setLocation] = useLocation();

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
        <div className="max-w-7xl m
