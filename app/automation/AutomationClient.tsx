"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiSearch,
  BiTime,
  BiDollar,
  BiChevronDown,
  BiChevronUp,
  BiEnvelope,
  BiPlay,
  BiCheckCircle,
  BiArrowBack,
  BiTerminal,
} from "react-icons/bi";
import {
  FaSlack,
  FaHubspot,
  FaGoogleDrive,
  FaShopify,
  FaGoogle,
} from "react-icons/fa";
import { SiOpenai, SiNotion, SiZendesk } from "react-icons/si";

type ProfileProps = {
  email: string;
};

type AutomationItem = {
  id: string;
  title: string;
  category: "sales" | "ops" | "ai" | "marketing";
  categoryLabel: string;
  description: string;
  roiBadge: string;
  tools: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }[];
  flow: {
    title: string;
    description: string;
  }[];
  consoleOutput: string[];
};

export default function AutomationClient({ email }: ProfileProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "sales" | "ops" | "ai" | "marketing">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // ROI Calculator states
  const [hoursSpent, setHoursSpent] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(40);

  // Popular automations list
  const automations: AutomationItem[] = useMemo(
    () => [
      {
        id: "crm-sync",
        title: "Lead Capture & Instant CRM Sync",
        category: "sales",
        categoryLabel: "Sales & CRM",
        description:
          "Instantly sync website leads to your CRM, enrich contact profiles using AI intelligence, draft a customized intro email, and notify your sales team immediately on Slack.",
        roiBadge: "Saves 5h / week per rep",
        tools: [
          { name: "Gmail", icon: FaGoogle, color: "text-red-500" },
          { name: "HubSpot", icon: FaHubspot, color: "text-orange-500" },
          { name: "OpenAI", icon: SiOpenai, color: "text-teal-500" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "Lead submits details on your website" },
          { title: "Enrichment", description: "AI researches lead's company size & LinkedIn" },
          { title: "CRM Sync", description: "HubSpot contact & deal created automatically" },
          { title: "Alert", description: "Slack notification sent to sales channel" },
          { title: "Email Draft", description: "Customized introduction email saved to Gmail drafts" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: New form submission from John Doe (Tech Corp)",
          "🔍 AI AGENT: Fetching details for techcorp.com...",
          "🔍 AI AGENT: Enriched profile (Industry: SaaS, Size: 50-100, HQ: New York)",
          "📂 HUBSPOT: Contact created (id: 98124) & Deal added (value: $12,000)",
          "💬 SLACK: Sent alert to #sales-pipeline [Contact: John Doe | SaaS | NYC]",
          "✉️ GMAIL: Drafted intro response with personalized SaaS case study",
          "✅ SUCCESS: Lead processed in 4.2 seconds."
        ],
      },
      {
        id: "client-onboarding",
        title: "Automated Client Onboarding",
        category: "ops",
        categoryLabel: "Operations",
        description:
          "Trigger onboarding immediately when a proposal is signed or payment succeeds. Set up shared Google Drive folders, client Notion dashboards, and Slack channels in seconds.",
        roiBadge: "Saves 2h / client",
        tools: [
          { name: "Stripe", icon: BiDollar, color: "text-indigo-500" },
          { name: "Google Drive", icon: FaGoogleDrive, color: "text-green-500" },
          { name: "Notion", icon: SiNotion, color: "text-zinc-800 dark:text-white" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "Stripe payment clears or agreement signed" },
          { title: "Directories", description: "Google Drive folders created for deliverables" },
          { title: "Client Portal", description: "Notion client workspace generated from templates" },
          { title: "Team Room", description: "Dedicated Slack channel created and members invited" },
          { title: "Welcome Kit", description: "Onboarding email sent with portal links" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: Stripe payment succeeded for Acme Corp (invoice_0x9183)",
          "📁 GOOGLE DRIVE: Created folder 'Acme Corp - Deliverables'",
          "📁 GOOGLE DRIVE: Created subfolders: '1. Invoices', '2. Shared Assets', '3. Designs'",
          "📝 NOTION: Duplicating workspace template for client 'Acme Corp'...",
          "📝 NOTION: Generated shared dashboard link: notion.so/acme-corp-workspace",
          "💬 SLACK: Created private channel #client-acme-corp",
          "💬 SLACK: Added Project Managers and invited user: john@acmecorp.com",
          "✉️ MAIL: Sent welcome email containing onboarding details and Notion link",
          "✅ SUCCESS: Acme Corp onboarding flow completed."
        ],
      },
      {
        id: "accounting-sync",
        title: "E-Commerce Invoicing & Accounting",
        category: "ops",
        categoryLabel: "Operations",
        description:
          "Sync Shopify orders or Stripe sales directly to your accounting platform. Generate legal invoices, email them to clients, update inventories, and keep your books perfectly clean.",
        roiBadge: "0 manual data entry errors",
        tools: [
          { name: "Shopify", icon: FaShopify, color: "text-green-600" },
          { name: "Stripe", icon: BiDollar, color: "text-indigo-500" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "New checkout completed on Shopify" },
          { title: "Finance Sync", description: "Generate invoice in Xero / QuickBooks" },
          { title: "Email Invoice", description: "Send official invoice/receipt PDF to customer" },
          { title: "Inventory", description: "Update stock counts in internal database" },
          { title: "Finance Log", description: "Log payment status in Slack accounting channel" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: Shopify Order #1509 received (Total: $849.00)",
          "🧾 FINANCE API: Connecting to accounting engine...",
          "🧾 FINANCE API: Generated QuickBooks Invoice #INV-2026-1509",
          "✉️ SYSTEM: Emailed Invoice PDF to buyer customer@email.com",
          "📦 DATABASE: Deducted 2 units from inventory SKU: PRD-921",
          "💬 SLACK: Sent summary to #finance [Order #1509 | Invoice Generated | Paid]",
          "✅ SUCCESS: Financial record synced."
        ],
      },
      {
        id: "ai-support",
        title: "AI Support Agent & Escalation",
        category: "ai",
        categoryLabel: "AI & Intelligence",
        description:
          "Analyze customer tickets automatically. AI queries your knowledge base, drafts an answer, submits it to human agents for 1-click approval, and escalates high-risk issues.",
        roiBadge: "70% response time reduction",
        tools: [
          { name: "Zendesk", icon: SiZendesk, color: "text-green-800" },
          { name: "OpenAI", icon: SiOpenai, color: "text-teal-500" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "Customer submits support ticket" },
          { title: "Sentiment", description: "AI analyses priority, sentiment and category" },
          { title: "Knowledge", description: "AI fetches answer from internal wiki & docs" },
          { title: "Drafting", description: "Draft solution loaded onto Zendesk agent UI" },
          { title: "Escalation", description: "Urgent/angry tickets trigger high-priority Slack ping" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: New Zendesk Ticket #4018: 'API integration keeps throwing 500'",
          "🧠 AI AGENT: Analyzing sentiment... [Urgent / Technical Error]",
          "🔍 VECTOR SEARCH: Querying technical docs for 'API 500 error code'...",
          "🧠 AI AGENT: Drafting solution citing chapter 4 of developer guidelines...",
          "📝 ZENDESK: Pre-filled agent draft: 'Hello, this error usually occurs when...'",
          "⚠️ WARNING: Sentiment score is critical. Triggering team notification...",
          "💬 SLACK: Sent alert to #escalations [Ticket #4018 | API 500 | Sentiment: Frustrated]",
          "✅ SUCCESS: AI assistant draft prepared."
        ],
      },
      {
        id: "content-distributor",
        title: "AI-Powered Content Distribution",
        category: "marketing",
        categoryLabel: "Marketing & AI",
        description:
          "Publish once and propagate everywhere. When you release a new blog post, AI drafts optimized versions for LinkedIn and X, resizes visual assets, and schedules them for peak engagement.",
        roiBadge: "Saves 6h / article",
        tools: [
          { name: "CMS", icon: BiTime, color: "text-blue-500" },
          { name: "OpenAI", icon: SiOpenai, color: "text-teal-500" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "New article published in CMS (Sanity/WordPress)" },
          { title: "Summarizer", description: "AI reads content and generates key takeaways" },
          { title: "Adaptation", description: "Write short post for X and structured post for LinkedIn" },
          { title: "Scheduling", description: "Queue posts in Buffer/Hootsuite for optimal time" },
          { title: "Alert", description: "Ping marketing channel in Slack to verify" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: New Article Published: 'Scaling React Server Components'",
          "🧠 AI AGENT: Analyzing article text (2,400 words)...",
          "🧠 AI AGENT: Extracted 5 core technical key takeaways",
          "✍️ AI WRITER: Generated X Thread (4 posts) with relevant dev tags",
          "✍️ AI WRITER: Generated LinkedIn Post (rich formatting, executive summary)",
          "📅 BUFFER: Queued LinkedIn post for Thursday, 10:00 AM EST",
          "📅 BUFFER: Queued X Thread for Thursday, 11:30 AM EST",
          "💬 SLACK: Sent confirmation to #marketing-team with drafts ready to preview",
          "✅ SUCCESS: Distribution pipeline active."
        ],
      },
      {
        id: "competitor-tracker",
        title: "Competitor Price & Intel Scraper",
        category: "marketing",
        categoryLabel: "Marketing & AI",
        description:
          "Keep tabs on your industry. Automate a daily scrape of competitor landing pages to check pricing shifts, new feature releases, or landing page changes, and compile weekly reports.",
        roiBadge: "100% market awareness",
        tools: [
          { name: "Scraper", icon: BiTerminal, color: "text-zinc-600" },
          { name: "Google Sheets", icon: FaGoogleDrive, color: "text-green-600" },
          { name: "OpenAI", icon: SiOpenai, color: "text-teal-500" },
          { name: "Slack", icon: FaSlack, color: "text-pink-500" },
        ],
        flow: [
          { title: "Trigger", description: "Daily cron job schedules scraping at 8:00 AM" },
          { title: "Scrape", description: "Extract HTML content from competitor pages" },
          { title: "Analysis", description: "AI compares page content with yesterday's snapshot" },
          { title: "Data Log", description: "Update comparison metrics in Google Sheets" },
          { title: "Report", description: "Post bulleted summaries of detected shifts to Slack" },
        ],
        consoleOutput: [
          "⚡ TRIGGER: Scheduled Cron Job 'competitor_intel_daily' (08:00)",
          "🌐 SCRAPER: Crawling target_competitor_A.com/pricing...",
          "🌐 SCRAPER: Crawling target_competitor_B.com/pricing...",
          "🧠 AI AGENT: Comparing source code against snapshot 2026-07-14...",
          "⚠️ SHIFT DETECTED: Competitor A changed 'Enterprise Plan' from $499 to $449",
          "📊 GOOGLE SHEETS: Logged new price matrix in tab 'Pricing History'",
          "💬 SLACK: Posted alert to #product-intel [Competitor A decreased Enterprise price by 10%]",
          "✅ SUCCESS: Daily scan completed."
        ],
      },
    ],
    []
  );

  // Filter automations based on selection & search term
  const filteredAutomations = useMemo(() => {
    return automations.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tools.some((t) => t.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [automations, selectedCategory, searchTerm]);

  // Calculations for ROI
  const calculatedSavings = useMemo(() => {
    const monthlyHours = hoursSpent * 4;
    const monthlyMoney = hoursSpent * hourlyRate * 4;
    const yearlyMoney = hoursSpent * hourlyRate * 52;
    return {
      monthlyHours,
      monthlyMoney,
      yearlyMoney,
    };
  }, [hoursSpent, hourlyRate]);

  return (
    <div className="space-y-16 pb-20">
      {/* SECTION 1: Interactive ROI Calculator */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/40 bg-zinc-50/50 backdrop-blur-md rounded-2xl p-6 md:p-8 grid md:grid-cols-12 gap-8 items-center"
      >
        <div className="md:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-color bg-primary-color/10 px-2.5 py-1 rounded-full">
              ROI Estimator
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3">
              Calculate Your Automation Savings
            </h2>
            <p className="dark:text-zinc-400 text-zinc-600 mt-2 text-sm md:text-base">
              Repetitive manual tasks cost your business valuable time and money. Adjust the sliders below to estimate the monthly and annual impact of automation.
            </p>
          </div>

          <div className="space-y-6">
            {/* Slider 1: Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-semibold dark:text-zinc-300 text-zinc-700">
                  Manual workload (hours / week):
                </span>
                <span className="font-bold text-primary-color">{hoursSpent} hrs</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                value={hoursSpent}
                onChange={(e) => setHoursSpent(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 accent-primary-color cursor-pointer"
              />
              <div className="flex justify-between text-xs text-zinc-400">
                <span>2 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Slider 2: Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-semibold dark:text-zinc-300 text-zinc-700">
                  Average hourly rate ($ / hour):
                </span>
                <span className="font-bold text-primary-color">${hourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 accent-primary-color cursor-pointer"
              />
              <div className="flex justify-between text-xs text-zinc-400">
                <span>$15/hr</span>
                <span>$80/hr</span>
                <span>$150/hr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-zinc-950 text-white rounded-xl p-6 border border-zinc-800/80 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-color/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-6">
            <h3 className="text-zinc-400 text-sm font-semibold tracking-wider uppercase">
              Estimated Savings
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-zinc-500 text-xs block">Monthly Hours Freed</span>
                <span className="text-2xl md:text-3xl font-extrabold text-white font-incognito">
                  {calculatedSavings.monthlyHours} hrs
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 text-xs block">Monthly Capital Reclaimed</span>
                <span className="text-2xl md:text-3xl font-extrabold text-primary-color font-incognito">
                  ${calculatedSavings.monthlyMoney.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 pt-4">
              <span className="text-zinc-400 text-xs block">Yearly Added Value</span>
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-emerald-400 font-incognito">
                ${calculatedSavings.yearlyMoney.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900">
            <a
              href={`mailto:${email}?subject=Automation Consultation Inquiry&body=Hi Arnau,%0D%0A%0D%0AI evaluated the automation savings calculator and would love to talk about building custom automation solutions to save our business time and resources. We estimate we spend ${hoursSpent} hours per week on manual workflows and want to automate them.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
              className="w-full flex items-center justify-center gap-x-2 text-center text-zinc-950 font-bold bg-primary-color hover:bg-emerald-400 py-2.5 rounded-lg transition duration-300"
            >
              <BiEnvelope className="text-lg" /> Discuss Your Workflow
            </a>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: Catalog header, Search and Category filters */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Popular Workflow Solutions</h2>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm mt-1">
              Explore pre-built architectures and flows designed to integrate your software stack seamlessly.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearch className="text-zinc-400 text-lg" />
            </span>
            <input
              type="text"
              placeholder="Search automations or tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white focus:outline-none focus:ring-1 focus:ring-primary-color focus:border-primary-color transition duration-300"
            />
          </div>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b dark:border-zinc-800 border-zinc-200 pb-4">
          {(
            [
              { key: "all", label: "All Automations" },
              { key: "sales", label: "Sales & CRM" },
              { key: "ops", label: "Operations" },
              { key: "ai", label: "AI & Intelligence" },
              { key: "marketing", label: "Marketing & Content" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 ${
                selectedCategory === tab.key
                  ? "bg-primary-color text-zinc-950"
                  : "dark:bg-primary-bg bg-zinc-100 hover:dark:bg-zinc-800 hover:bg-zinc-200 dark:text-zinc-300 text-zinc-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 3: Catalog List Grid */}
      {filteredAutomations.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredAutomations.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout="position"
                className={`group rounded-xl border dark:bg-primary-bg bg-zinc-50 border-transparent dark:hover:border-zinc-800 hover:border-zinc-200 hover:shadow-lg dark:hover:bg-zinc-900/40 hover:bg-white overflow-hidden transition-all duration-300 ${
                  isExpanded ? "dark:border-zinc-700 border-zinc-300 shadow-xl" : ""
                }`}
              >
                <div
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-x-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-bold text-primary-color bg-primary-color/10 px-2 py-0.5 rounded">
                        {item.roiBadge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold dark:text-white text-zinc-950 group-hover:text-primary-color duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-x-4">
                    {/* Tool Badges */}
                    <div className="flex items-center -space-x-1.5 overflow-hidden">
                      {item.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          title={tool.name}
                          className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-sm shadow-sm"
                        >
                          <tool.icon className={`${tool.color} text-base`} />
                        </div>
                      ))}
                    </div>

                    {/* Chevron Indicator */}
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center dark:text-zinc-300 text-zinc-600">
                      {isExpanded ? (
                        <BiChevronUp className="text-xl" />
                      ) : (
                        <BiChevronDown className="text-xl" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t dark:border-zinc-800/80 border-zinc-200/80 bg-zinc-50/50 dark:bg-zinc-900/20"
                    >
                      <div className="p-6 grid md:grid-cols-12 gap-8">
                        {/* Flow diagram */}
                        <div className="md:col-span-6 space-y-4">
                          <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-x-2">
                            <BiPlay className="text-primary-color text-lg" /> System Flowchart
                          </h4>
                          
                          <div className="relative pl-6 space-y-6 border-l-2 border-dashed border-zinc-200 dark:border-zinc-800 ml-3 py-2">
                            {item.flow.map((step, idx) => (
                              <div key={idx} className="relative">
                                {/* Bullet indicator */}
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-primary-color bg-white dark:bg-zinc-900 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 bg-primary-color rounded-full animate-ping" />
                                </div>
                                <div className="space-y-0.5">
                                  <span className="text-xs font-bold text-primary-color uppercase tracking-wider block">
                                    {step.title}
                                  </span>
                                  <p className="text-sm dark:text-zinc-300 text-zinc-800 font-semibold">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Console Simulator */}
                        <div className="md:col-span-6 space-y-4">
                          <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-x-2">
                            <BiTerminal className="text-primary-color text-base" /> Output Live Preview
                          </h4>

                          <div className="bg-zinc-950 font-mono text-xs text-zinc-300 p-4 rounded-xl border border-zinc-800 shadow-inner space-y-2.5 overflow-x-auto min-h-[220px]">
                            <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
                              <span className="text-zinc-500 flex items-center gap-x-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                                <span className="ml-1.5 text-[10px]">automation_runner.log</span>
                              </span>
                              <span className="text-zinc-600 text-[10px]">Active</span>
                            </div>
                            {item.consoleOutput.map((logLine, idx) => (
                              <div key={idx} className="leading-5">
                                {logLine.startsWith("⚡") || logLine.startsWith("✅") ? (
                                  <span className="text-primary-color font-semibold">{logLine}</span>
                                ) : logLine.startsWith("⚠️") ? (
                                  <span className="text-yellow-400 font-semibold">{logLine}</span>
                                ) : (
                                  <span>{logLine}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer action inside expanded card */}
                        <div className="md:col-span-12 flex justify-end pt-4 border-t dark:border-zinc-800 border-zinc-200">
                          <a
                            href={`mailto:${email}?subject=Integration Request: ${item.title}&body=Hi Arnau,%0D%0A%0D%0AI am interested in setting up the "${item.title}" automation for my business.%0D%0A%0D%0APlease let me know how we can get started!%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                            className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white text-zinc-800 border dark:border-zinc-800 border-zinc-200 px-4 py-2.5 rounded-lg text-sm font-semibold transition duration-300"
                          >
                            <BiEnvelope className="text-lg" /> Get This Automation
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed dark:border-zinc-800 border-zinc-200 rounded-xl">
          <p className="text-zinc-500 text-sm">No automations found matching &quot;{searchTerm}&quot;.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="mt-4 text-xs font-semibold text-primary-color hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* SECTION 4: Contact / CTA */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center space-y-6 py-8 border-t dark:border-zinc-800 border-zinc-200"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need a Custom Automation?</h2>
        <p className="max-w-xl mx-auto dark:text-zinc-400 text-zinc-600 text-sm md:text-base leading-relaxed">
          Don&apos;t see exactly what you need? We build completely custom integrations, API pipelines, and specialized AI workflows tailored to your unique stack and business model.
        </p>
        <div className="flex justify-center">
          <a
            href={`mailto:${email}?subject=Custom Automation Project Request&body=Hi Arnau,%0D%0A%0D%0AI'd like to discuss a custom automation workflow for our business. Here is a brief description of what we are looking to achieve:%0D%0A%0D%0A[Describe your ideal automation]%0D%0A%0D%0ATools we want to connect:%0D%0A[List tools, e.g. Salesforce, Airtable, custom database]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
            className="flex items-center gap-x-2 text-zinc-950 font-bold bg-primary-color hover:bg-emerald-400 px-6 py-3 rounded-lg transition duration-300 text-base"
          >
            <BiEnvelope className="text-lg" /> Let&apos;s Build It Together
          </a>
        </div>
      </motion.section>
    </div>
  );
}
