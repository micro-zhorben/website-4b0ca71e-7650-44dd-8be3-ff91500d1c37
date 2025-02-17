import { Activity, Heart, Trophy, Calendar } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
  className?: string;
}

const features = [
  {
    icon: Activity,
    title: "实时运动追踪",
    description: "精确记录您的运动数据，包括步数、距离、卡路里消耗等。",
  },
  {
    icon: Heart,
    title: "健康监测",
    description: "监测心率、睡眠质量，让您随时了解身体状况。",
  },
  {
    icon: Trophy,
    title: "个性化目标",
    description: "设定专属健身目标，获得智能建议和激励。",
  },
  {
    icon: Calendar,
    title: "训练计划",
    description: "制定科学的训练计划，帮助您循序渐进达成目标。",
  },
];

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section className={cn("space-y-8 py-12", className)}>
      <div className="text-center">
        <Typography.H2>强大功能，助力健康</Typography.H2>
        <Typography.Lead>
          我们提供全方位的健身追踪功能，让您的运动更有效率
        </Typography.Lead>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-12 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}