import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';


export default function Cta() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative glass rounded-[3rem] p-12 md:p-20 overflow-hidden border-primary/20 text-center">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready to supercharge <br /> your{" "}
              <span className="text-primary">workflow?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12">
              Join thousands of developers building the future on DevSpace AI.
              Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className=" h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20 cursor-pointer"
                >
                  Get Started Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-14 px-10 text-lg hover:bg-surface/50"
                >
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
