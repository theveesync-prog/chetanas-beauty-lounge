import { Scissors, Leaf, Sparkles, Heart, Paintbrush, Baby } from "lucide-react";

const CATEGORY_STYLES: Record<
  string,
  { from: string; to: string; icon: typeof Scissors }
> = {
  "hair-care": { from: "#c4849a", to: "#5f1e42", icon: Scissors },
  "body-care": { from: "#9b7048", to: "#5f1e42", icon: Leaf },
  "skin-care": { from: "#e8b80d", to: "#c4849a", icon: Sparkles },
  bridal: { from: "#5f1e42", to: "#e8b80d", icon: Heart },
  nails: { from: "#8b4b6b", to: "#e8b80d", icon: Paintbrush },
  "for-kids": { from: "#f6dd86", to: "#c4849a", icon: Baby },
};

interface ServiceImageProps {
  categorySlug: string;
  serviceName: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function ServiceImage({
  categorySlug,
  serviceName,
  className = "",
  size = "md",
}: ServiceImageProps) {
  const style = CATEGORY_STYLES[categorySlug] ?? CATEGORY_STYLES["hair-care"];
  const Icon = style.icon;
  const iconSize = size === "sm" ? 24 : size === "md" ? 32 : 48;

  return (
    <div
      className={`rounded-xl flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${style.from}20 0%, ${style.to}15 100%)`,
      }}
      role="img"
      aria-label={`${serviceName} placeholder`}
    >
      <Icon
        size={iconSize}
        className="text-[#5f1e42]/25"
        strokeWidth={1.5}
      />
    </div>
  );
}
