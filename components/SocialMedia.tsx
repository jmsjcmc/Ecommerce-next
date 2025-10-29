import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}
export default function SocialMedia({className, iconClassName, tooltipClassName}: Props) {
  const socialLink = [
    {
      title: "YouTube",
      href: "https://www.google.com/",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "GitHub",
      href: "https://www.google.com/",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.google.com/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://www.google.com/",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Slack",
      href: "https://www.google.com/",
      icon: <Slack className="w-5 h-5" />,
    },
  ];
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link key={item?.title} href={item?.href} className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect', iconClassName)}>
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}>{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
