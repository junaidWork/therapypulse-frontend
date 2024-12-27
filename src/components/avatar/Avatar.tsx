import { cva } from "class-variance-authority";

const avatarVariants = cva(
  "inline-flex items-center justify-center bg-[#D6E4F4] rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-xs", // Small size
        md: "w-12 h-12 text-sm", // Medium size
        lg: "w-16 h-16 text-lg", // Large size
        icon: "w-10 h-10", // Icon size
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface AvatarProps {
  name?: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg" | "icon";
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl, size }) => {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase(); // Extract first letter of each name
  };

  return (
    <div className={avatarVariants({ size })}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name || "Avatar"}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span className="font-semibold">{name ? getInitials(name) : "?"}</span>
      )}
    </div>
  );
};

export default Avatar;
