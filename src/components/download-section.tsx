import { QrCode, Apple, Smartphone } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadSectionProps {
  className?: string;
}

export function DownloadSection({ className }: DownloadSectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 items-center gap-8 rounded-3xl bg-muted p-8 md:grid-cols-2 md:gap-12",
        className
      )}
    >
      <div>
        <Typography.H2>立即下载应用</Typography.H2>
        <Typography.Lead className="mt-4">
          在 App Store 和 Google Play 免费下载，开启您的健康之旅。
        </Typography.Lead>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button className="gap-2">
            <Apple /> App Store
          </Button>
          <Button className="gap-2">
            <Smartphone /> Google Play
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg bg-background p-8">
          <QrCode className="size-32 text-primary" />
          <Typography.Small className="mt-4 block text-center">
            扫描二维码下载
          </Typography.Small>
        </div>
      </div>
    </section>
  );
}