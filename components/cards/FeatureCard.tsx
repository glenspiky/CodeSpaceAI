import { motion } from "framer-motion";


interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      /* glass: uses your custom glass class from globals.css */
      /* group: allows us to animate the icon when the card is hovered */
      className="glass p-10 rounded-[2.5rem] hover:bg-surface/50 transition-all border-border group relative overflow-hidden"
    >
      {/* SUBTLE GLOW EFFECT - This appears on hover */}
      <div className="absolute -inset-px bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ICON CONTAINER */}
      <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
        {/* Glowing dot behind icon */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* DECORATIVE CORNER ACCENT */}
      <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="size-12 border-r-2 border-b-2 border-primary rounded-br-lg" />
      </div>
    </motion.div>
  );
}
