import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryButton } from "@/components/CategoryButton";
import { ToolCard } from "@/components/ToolCard";
import { Brain, Image, MessageSquare, Music, Video, Code, Sparkles } from "lucide-react";

const categories = [
  { name: "All", icon: <Sparkles size={18} /> },
  { name: "ChatBots", icon: <MessageSquare size={18} /> },
  { name: "Image", icon: <Image size={18} /> },
  { name: "Video", icon: <Video size={18} /> },
  { name: "Audio", icon: <Music size={18} /> },
  { name: "Code", icon: <Code size={18} /> },
  { name: "General AI", icon: <Brain size={18} /> },
];

const tools = [
  {
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content generation.",
    category: "ChatBots",
    imageUrl: "/placeholder.svg",
    link: "https://chat.openai.com",
  },
  {
    name: "Midjourney",
    description: "AI-powered tool for generating stunning artwork and illustrations.",
    category: "Image",
    imageUrl: "/placeholder.svg",
    link: "https://midjourney.com",
  },
  {
    name: "Runway",
    description: "Create and edit videos with AI-powered tools and effects.",
    category: "Video",
    imageUrl: "/placeholder.svg",
    link: "https://runway.ml",
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster.",
    category: "Code",
    imageUrl: "/placeholder.svg",
    link: "https://github.com/features/copilot",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Best AI Tools
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Find the perfect AI tools to enhance your workflow
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto py-8">
        <div className="flex gap-3 overflow-x-auto pb-4">
          {categories.map((category) => (
            <CategoryButton
              key={category.name}
              name={category.name}
              icon={category.icon}
              isSelected={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
            />
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;