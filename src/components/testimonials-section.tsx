import { Star } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    content:
      "这款应用帮助我建立了规律的运动习惯，界面简洁易用，功能非常实用。",
    author: "张明",
    role: "健身爱好者",
    rating: 5,
  },
  {
    content:
      "个性化的训练计划很适合我这样的初学者，每天都能看到进步，很有成就感。",
    author: "李华",
    role: "上班族",
    rating: 5,
  },
  {
    content:
      "数据分析功能很强大，可以清晰地看到自己的运动趋势，非常专业。",
    author: "王芳",
    role: "马拉松跑者",
    rating: 5,
  },
];

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={cn("space-y-8 py-12", className)}>
      <div className="text-center">
        <Typography.H2>用户反馈</Typography.H2>
        <Typography.Lead>
          听听我们的用户怎么说
        </Typography.Lead>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.author}>
            <CardHeader>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-accent text-accent"
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <Typography.P>{testimonial.content}</Typography.P>
            </CardContent>
            <CardFooter>
              <div>
                <Typography.H4>{testimonial.author}</Typography.H4>
                <Typography.Muted>{testimonial.role}</Typography.Muted>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}