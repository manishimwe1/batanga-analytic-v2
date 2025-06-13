
import { ReactNode } from "react";

interface ServiceFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceFeatureCard({ icon, title, description }: ServiceFeatureCardProps) {
  return (
    <div className="p-6 border-l-4 border-yellow-500 hover:shadow-md transition-shadow bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-batanga-darkblue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
