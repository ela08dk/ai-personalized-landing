
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about newmode.ai
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What results should I expect?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Newmode aims to increase conversions by delivering personalized pages that match visitor intent. For example, a visitor from a competitor-targeted Google Ad might see copy highlighting your advantages, while someone from a news article sees a different angle. Industry data shows personalized pages can lift conversion rates by 10-30% on average, with top cases seeing up to 10x improvement over generic pages. Results depend on traffic volume, your baseline conversion rate, and how well your offer aligns with visitors. You'll get detailed performance metrics via our dashboard, tied to your Google Analytics data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Do I need to migrate from my current hosting provider?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No, Newmode does not host landing pages. It integrates with your existing website builder—such as WordPress, Webflow, Framer, or a custom-built site. Our tool dynamically generates personalized content and runs A/B tests on your site without requiring you to change your hosting setup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How does installation work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Installation is straightforward. You add a small JavaScript snippet to your website's code, typically in the &lt;head&gt; or &lt;body&gt; section. Once embedded, Newmode operates client-side, meaning all personalization and testing happen in the visitor's browser. No server-side changes are needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How are you different from Loveable?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Loveable is a website and app builder focused on creating sites from scratch. Newmode isn't a builder—it's an optimization layer. We plug into your existing site (which could be built with Loveable or any other tool) and enhance it by generating personalized copy for each traffic source and ad keyword. Our focus is on automating A/B testing and refining messaging to boost conversions, not on designing the site itself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How long does it take to see results?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Results typically appear between 7 days and 3 months. The timeline varies based on:
                <br /><br />
                Traffic volume: Higher traffic (e.g., 1,000+ visitors/month) speeds up A/B test cycles.
                <br /><br />
                Test complexity: Simple copy tweaks resolve faster than multi-variable tests.
                <br /><br />
                Product-market fit (PMF): If your offer already resonates, you'll see gains sooner.
                <br /><br />
                Without PMF, results may take longer as Newmode iterates to find winning messaging. Most users notice initial improvements within 3 months with sufficient traffic (e.g., 500+ unique visitors).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                I don't have product-market fit or a marketing team—can I still use Newmode?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes. Startups without PMF can use Newmode to experiment with messaging and uncover what resonates with their audience. Our AI generates and tests copy variations automatically, so you don't need a marketing team. For example, it might test "affordable solution" vs. "premium quality" to see what drives clicks or sales. It's a hands-off way to refine your value proposition while building PMF. You'll need basic traffic (e.g., 100+ visitors/month) to get meaningful data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Do you offer startup discounts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes. To qualify, sign up for Newmode, retweet our launch tweet from your X account, and comment "startup" on the tweet. We'll reach out within 48 hours with a discounted offer tailored for early-stage companies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Can I resell your product? Do you have an affiliate program?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, we have an affiliate program. Sign up here (#) (link to be provided). Affiliates earn a commission on each referred customer's subscription for the first year. You'll get a unique referral link and access to a dashboard tracking clicks and payouts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How do I contact you with questions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Tweet us on X at @newmode_ai (#) (replace with your actual handle). We monitor messages daily and respond within 24 hours, often faster. For technical issues, include specifics like error messages or browser details. We don't offer phone or email support at this time—X is our primary channel for quick, public-facing responses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What data do you need to work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Newmode requires read access to your Google Analytics (for traffic source data) and Google Ads (for keyword and campaign data) accounts. You'll authenticate these during setup using OAuth 2.0, ensuring secure, revocable access. We don't store sensitive visitor data—personalization happens real-time in the browser. Your site must also allow JavaScript execution for our script to function.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Can I control the personalization manually?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, you can override the AI's suggestions via our dashboard. For instance, if you want specific copy for a high-value keyword, you can set it manually while letting Newmode optimize other pages. You can also pause tests or exclude certain traffic sources (e.g., direct visits) from personalization.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
