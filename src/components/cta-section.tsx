import { ArrowRight, PhoneCall } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl bg-primary px-6 py-24 text-primary-foreground",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#000_100%)] opacity-10" />
      <div className="relative mx-auto max-w-2xl text-center">
        <Typography.H2 className="text-primary-foreground">
          开始您的健康之旅
        </Typography.H2>
        <Typography.Lead className="mt-4 text-primary-foreground/90">
          立即下载应用，加入数百万用户的健康社区。首次注册即可获得14天免费专业会员体验。
        </Typography.Lead>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            免费下载 <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            联系我们 <PhoneCall />
          </Button>
        </div>
      </div>
    </section>
  );
}