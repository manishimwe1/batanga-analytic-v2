
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesCardProps {
  title: string;
  items: string[];
}

export function ServicesCard({ title, items }: ServicesCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-yellow-500">
      <CardHeader className="bg-white">
        <CardTitle className="text-batanga-darkblue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="bg-white">
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
