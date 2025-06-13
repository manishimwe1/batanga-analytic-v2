
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl font-bold text-center mb-8", className)}>
      {children}
    </h2>
  );
}
