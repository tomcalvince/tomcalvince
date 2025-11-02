"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What kind of projects do you usually work on?",
    answer:
      "Mostly web apps—anything from dashboards to e-commerce platforms. I enjoy building both the interface and the logic behind it. Currently working on analytics dashboards, multi-tenant APIs, and logistics management systems.",
  },
  {
    question: "Do you help with project planning and architecture?",
    answer:
      "Absolutely! I have experience designing ERDs, planning flows, and building scalable database schemas. I've also led front and back-end teams, handled task distribution, and made key tech decisions.",
  },
  {
    question: "What's your experience with Docker and deployment?",
    answer:
      "I manage full Docker-based infrastructure, deploying multi-container setups with zero-downtime rollouts. I've configured production servers using Nginx reverse proxy and Let's Encrypt SSL, achieving 99.9% uptime.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Yes! I've worked on 4+ projects with existing codebases, keeping collaboration smooth and development consistent. I'm experienced with code reviews, refactoring, and maintaining legacy systems.",
  },
  {
    question: "How do you handle performance optimization?",
    answer:
      "I optimize frontend performance with lazy loading and code splitting (reduced bundle size by 35%). On the backend, I design efficient database queries, implement caching, and optimize API response times. I also handle large data volumes—currently managing systems with 10,000+ daily records.",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 text-center"
        >
          Let&apos;s Clear Things Up
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 sm:p-8 bg-white dark:bg-gray-900 shadow-md border-gray-200 dark:border-gray-800 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-32 h-32 sm:w-32 sm:h-32 overflow-hidden bg-gray-200">
                  <Image
                    src="/images/profile.jpg"
                    alt="Calvince Otieno Tom"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Got a question? Let&apos;s chat.
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    I&apos;m just a message away. Whether it&apos;s a bug, a
                    collab, or just to say hi.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto min-h-[48px] justify-start"
                    asChild
                  >
                    <a
                      href="mailto:calvinceotienotom@gmail.com?subject=Portfolio Contact"
                      className="flex items-center gap-2 no-underline"
                    >
                      <Mail className="h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto min-h-[48px] justify-start"
                    asChild
                  >
                    <a
                      href="https://wa.me/254757230421"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Text me on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 sm:p-8 bg-white dark:bg-gray-900 shadow-md border-gray-200 dark:border-gray-800">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base sm:text-lg min-h-[48px] hover:no-underline">
                      {index + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm sm:text-base pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

