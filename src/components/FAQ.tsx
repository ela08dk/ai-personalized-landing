
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do you host the landing pages?",
    answer:
      "No, Newmode does not host landing pages. It integrates with your existing website builder—such as WordPress, Webflow, Framer, or a custom-built site. Our tool dynamically generates personalized content and runs A/B tests on your site without requiring you to change your hosting setup.",
  },
  {
    question: "How does installation work?",
    answer:
      "Installation is straightforward. You add a small JavaScript snippet to your website's code, typically in the <head> or <body> section. Once embedded, Newmode operates client-side, meaning all personalization and testing happen in the visitor's browser. It connects to your Google Analytics and Google Ads accounts via API (you'll need to grant secure access during setup), pulling referral data and ad keywords to tailor content. No server-side changes are needed.",
  },
  {
    question: "How are you different from Loveable?",
    answer:
      "Loveable is a website and app builder focused on creating sites from scratch. Newmode isn't a builder—it's an optimization layer. We plug into your existing site (which could be built with Loveable or any other tool) and enhance it by generating personalized copy for each traffic source and ad keyword. Our focus is on automating A/B testing and refining messaging to boost conversions, not on designing the site itself.",
  },
  {
    question: "What results should I expect?",
    answer:
      "Newmode aims to increase conversions by delivering personalized pages that match visitor intent. For example, a visitor from a competitor-targeted Google Ad might see copy highlighting your advantages, while someone from a news article sees a different angle. Industry data shows personalized pages can lift conversion rates by 10-30% on average, with top cases seeing up to 10x improvement over generic pages. Results depend on traffic volume, your baseline conversion rate, and how well your offer aligns with visitors. You'll get detailed performance metrics via our dashboard, tied to your Google Analytics data.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results typically appear between 7 days and 3 months. The timeline varies based on:\nTraffic volume: Higher traffic (e.g., 1,000+ visitors/month) speeds up A/B test cycles.\nTest complexity: Simple copy tweaks resolve faster than multi-variable tests.\nProduct-market fit (PMF): If your offer already resonates, you'll see gains sooner.\nWithout PMF, results may take longer as Newmode iterates to find winning messaging. Most users notice initial improvements within 3 months with sufficient traffic (e.g., 500+ unique visitors).",
  },
  {
    question: "I don't have product-market fit or a marketing team—can I still use Newmode?",
    answer:
      "Yes. Startups without PMF can use Newmode to experiment with messaging and uncover what resonates with their audience. Our AI generates and tests copy variations automatically, so you don't need a marketing team. For example, it might test \"affordable solution\" vs. \"premium quality\" to see what drives clicks or sales. It's a hands-off way to refine your value proposition while building PMF. You'll need basic traffic (e.g., 100+ visitors/month) to get meaningful data.",
  },
  {
    question: "Do you offer startup discounts?",
    answer:
      "Yes. To qualify, sign up for Newmode, retweet our launch tweet from your X account, and comment \"startup\" on the tweet. We'll reach out within 48 hours with a discounted offer tailored for early-stage companies.",
  },
  {
    question: "Can I resell your product? Do you have an affiliate program?",
    answer:
      "Yes, we have an affiliate program. Sign up here (#) (link to be provided). Affiliates earn a commission on each referred customer's subscription for the first year. You'll get a unique referral link and access to a dashboard tracking clicks and payouts.",
  },
  {
    question: "How do I contact you with questions?",
    answer:
      "Tweet us on X at @NewmodeHQ (#) (replace with your actual handle). We monitor messages daily and respond within 24 hours, often faster. For technical issues, include specifics like error messages or browser details. We don't offer phone or email support at this time—X is our primary channel for quick, public-facing responses.",
  },
  {
    question: "What data do you need to work?",
    answer:
      "Newmode requires read access to your Google Analytics (for traffic source data) and Google Ads (for keyword and campaign data) accounts. You'll authenticate these during setup using OAuth 2.0, ensuring secure, revocable access. We don't store sensitive visitor data—personalization happens real-time in the browser. Your site must also allow JavaScript execution for our script to function.",
  },
  {
    question: "Can I control the personalization manually?",
    answer:
      "Yes, you can override the AI's suggestions via our dashboard. For instance, if you want specific copy for a high-value keyword, you can set it manually while letting Newmode optimize other pages. You can also pause tests or exclude certain traffic sources (e.g., direct visits) from personalization.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered landing page optimization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-xl px-6 py-2 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
