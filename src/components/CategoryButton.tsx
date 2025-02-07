import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  name: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}

export const CategoryButton = ({ name, icon, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
        isSelected
          ? "bg-primary text-white"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      )}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};