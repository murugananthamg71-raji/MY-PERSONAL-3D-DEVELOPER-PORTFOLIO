import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center text-center mb-12 md:mb-16",
        className
      )}
    >
      <Link href={`#${id}`} className="block w-full text-center mx-auto">
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-4xl text-center md:text-7xl font-bold w-full mx-auto text-balance",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base md:text-lg text-center text-muted-foreground text-balance">
          {desc}
        </p>
      )}
    </div>
  )
}
