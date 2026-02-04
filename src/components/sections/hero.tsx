'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { personal } from '@/lib/content';
import { ArrowRight, Eye, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-phthalo-green/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(18,53,47,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-pewter-blue font-medium tracking-wide">
              {personal.name} • {personal.pronouns}
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Product-minded engineer building inspectable AI systems and calm UX.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              I design human-in-the-loop AI tools with clear controls, fast feedback, and careful UX.
              I own the path from problem framing to production and iteration.
            </p>
            <p className="text-sm md:text-base text-pewter-blue max-w-3xl mx-auto">
              Now: MS Information Management @ UIUC • Building human-in-the-loop AI tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects" className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/contact" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
