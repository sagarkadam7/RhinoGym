import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-12 h-12 md:w-14 md:h-14",
  lg: "w-16 h-16 md:w-20 md:h-20",
};

interface LogoProps {
  size?: keyof typeof sizeMap;
  className?: string;
  ring?: boolean;
  priority?: boolean;
}

export default function Logo({
  size = "md",
  className,
  ring = false,
  priority = false,
}: LogoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 aspect-square rounded-full overflow-hidden bg-white",
        sizeMap[size],
        ring &&
          "ring-2 ring-transparent group-hover:ring-rhino-orange transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 scale-[1.48]">
        <Image
          src="/images/logo.png"
          alt={siteConfig.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 48px, 80px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
