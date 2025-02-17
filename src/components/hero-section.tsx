import { ArrowRight, Activity, Smartphone, Heart } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:gap-12 md:pb-12 md:pt-10",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <Typography.H1>
          追踪您的健身旅程
          <br />
          <span className="text-primary">实现您的健康目标</span>
        </Typography.H1>
        <Typography.Lead>
          专业的健身追踪应用，帮助您记录运动数据，制定个性化计划，实现健康生活方式。
        </Typography.Lead>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            立即开始 <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="text-foreground">
            了解更多
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-4">
          <div className="rounded-lg bg-primary/10 p-8">
            <Activity className="size-12 text-primary" />
          </div>
          <div className="rounded-lg bg-secondary/10 p-8">
            <Heart className="size-12 text-secondary" />
          </div>
        </div>
        <div className="mt-4">
          <div className="rounded-lg bg-accent/10 p-8">
            <Smartphone className="size-12 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}