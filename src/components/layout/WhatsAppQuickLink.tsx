import { WhatsappIcon } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site";

interface WhatsAppQuickLinkProps {
  message?: string;
  className?: string;
  iconClassName?: string;
  label?: string;
}

export default function WhatsAppQuickLink({
  message = "Hi Future Optima! I'd like to know more about your IT & AI courses.",
  className,
  iconClassName = "h-4 w-4",
  label,
}: WhatsAppQuickLinkProps) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? "Chat with us on WhatsApp"}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] text-white transition-transform hover:scale-105",
        className
      )}
    >
      <WhatsappIcon className={iconClassName} />
      {label ? <span>{label}</span> : null}
    </a>
  );
}
