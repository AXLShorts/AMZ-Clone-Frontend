"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const faqItems = [
  {
    id: "getting-started",
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy. Simply sign up for an account, choose your service package, and our team will guide you through the onboarding process. We provide comprehensive documentation and support every step of the way.",
  },
  {
    id: "product-sample",
    question: "Do you need a sample of my product? Where can we ship it?",
    answer:
      "Yes, we can work with product samples to ensure we deliver exactly what you need. We accept shipments to our facilities worldwide. Contact our team for specific shipping instructions and address details for your location.",
  },
  {
    id: "model-difference",
    question: "What is the difference between Model and non-Model packages?",
    answer:
      "Our Model packages include premium features such as priority support, advanced analytics, and custom integrations. Non-Model packages offer essential features at a more affordable price point. Choose based on your specific business needs.",
  },
  {
    id: "production-time",
    question: "How long does the entire production process take?",
    answer:
      "Standard production typically takes 5-7 business days from order confirmation. Rush options are available for an additional fee. Complex projects may require additional time, which we'll communicate upfront.",
  },
  {
    id: "pricing-higher",
    question: "Why are your prices higher than a freelancer?",
    answer:
      "We provide superior quality, reliability, and professional expertise. Our pricing reflects our commitment to excellence, dedicated support, project management, and guaranteed results. You're investing in consistency and quality, not just labor.",
  },
  {
    id: "rush-orders",
    question:
      "Can I rush my order? Is there an additional cost for expedited services?",
    answer:
      "Yes, rush orders are available. We offer expedited services at an additional fee based on how quickly you need your project completed. Contact us for specific rush pricing for your project.",
  },
  {
    id: "revisions",
    question: "What happens if I need more than two revisions?",
    answer:
      "Most packages include two free revisions. Additional revisions are available at a per-revision fee. We'll discuss your revision needs during the onboarding process and adjust accordingly.",
  },
  {
    id: "copyright",
    question: "Who owns the copyright to the images and videos produced?",
    answer:
      "You own all copyright to the final deliverables produced. We transfer full intellectual property rights to you upon project completion and payment.",
  },
  {
    id: "contact-support",
    question:
      "How can I contact you if I have issues or questions about the project?",
    answer:
      "You can reach our support team via email, phone, or our online contact form. We typically respond within 24 hours. For active projects, you'll have a dedicated project manager.",
  },
  {
    id: "source-files",
    question: "Do you provide source files and raw files with your projects?",
    answer:
      "Yes, we provide all source files and raw materials as part of our standard deliverables. This includes editable files in original formats so you can make future modifications.",
  },
];

export function FAQItems() {
  return (
    <Accordion type="multiple" className="w-full">
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
