import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export const ToolCard = ({ name, description, category, imageUrl, link }: ToolCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:animate-card-hover">
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
};