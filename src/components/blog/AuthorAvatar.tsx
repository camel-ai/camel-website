import Image from "next/image";
import { cn } from "@/lib/utils";

type AuthorAvatarProps = {
  name: string;
  avatar?: string;
  avatarDark?: string;
  /** Outer box size, e.g. h-10 w-10 or h-5 w-5 */
  className?: string;
  /** Passed to next/image `sizes` for the circular crop */
  sizes?: string;
};

export function AuthorAvatar({
  name,
  avatar,
  avatarDark,
  className = "h-10 w-10 shrink-0",
  sizes = "40px",
}: AuthorAvatarProps) {
  if (!avatar) return null;

  return (
    <div className={cn("relative overflow-hidden rounded-full", className)}>
      {avatarDark ? (
        <>
          <Image
            src={avatar}
            alt={name}
            fill
            sizes={sizes}
            className="object-contain dark:hidden"
          />
          <Image
            src={avatarDark}
            alt={name}
            fill
            sizes={sizes}
            className="hidden object-contain dark:block"
          />
        </>
      ) : (
        <Image src={avatar} alt={name} fill sizes={sizes} className="object-cover" />
      )}
    </div>
  );
}
