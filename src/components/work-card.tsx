import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";

interface Props {
  logo: string;
  title: string;
  subtitle: string;
  description?: string;
  period: string;
  href?: string;
}

export function WorkCard({
  logo,
  title,
  subtitle,
  description,
  period,
  href,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logo} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
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

        <p className="text-sm text-muted-foreground">{subtitle}</p>

        {description && (
          <Markdown className="prose max-w-full dark:prose-invert text-pretty text-sm text-muted-foreground">
            {description}
          </Markdown>
        )}
      </div>
    </li>
  );
}
