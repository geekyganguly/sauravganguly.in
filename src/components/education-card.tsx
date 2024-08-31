"use client";

import Link from "next/link";

import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  href?: string;
}

export function EducationCard({ logo, title, subtitle, period, href }: Props) {
  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logo} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            {href ? (
              <Link href={href} target="_blank">
                <h3 className="font-semibold leading-none text-xs sm:text-sm">
                  {title}
                </h3>
              </Link>
            ) : (
              <h3 className="font-semibold leading-none text-xs sm:text-sm">
                {title}
              </h3>
            )}

            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>

          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
      </div>
    </Card>
  );
}
