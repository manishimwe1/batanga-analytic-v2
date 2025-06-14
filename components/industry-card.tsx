'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IndustryCardProps {
  title: string;
  features: string[];
}

export function IndustryCard({ title, features }: IndustryCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-yellow-500">
      <CardHeader className="bg-white">
        <CardTitle className="text-batanga-darkblue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="bg-white">
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
