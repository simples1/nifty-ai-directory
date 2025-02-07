// Sample data for AI tools
const tools = [
    {
        name: "ChatGPT",
        description: "Advanced language model for natural conversations and content generation.",
        category: "chatbots",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        link: "https://chat.openai.com"
    },
    {
        name: "Midjourney",
        description: "AI-powered tool for generating stunning artwork and illustrations.",
        category: "image",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        link: "https://midjourney.com"
    },
    {
        name: "Runway",
        description: "Create and edit videos with AI-powered tools and effects.",
        category: "video",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        link: "https://runway.ml"
    },
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps you write better code faster.",
        category: "code",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        link: "https://github.com/features/copilot"
    }
];

// DOM Elements
const toolsGrid = document.querySelector('.tools-grid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');

// Create tool card HTML
function createToolCard(tool) {
    return `
        <div class="tool-card">
            <img src="${tool.imageUrl}" alt="${tool.name}">
            <div class="tool-card-content">
                <div class="tool-card-header">
                    <h3 class="tool-card-title">${tool.name}</h3>
                    <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="external-link">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <p class="tool-card-description">${tool.description}</p>
                <span class="tool-card-category">${tool.category}</span>
            </div>
        </div>
    `;
}

// Filter tools based on search query and category
function filterTools(searchQuery = '', category = 'all') {
    return tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category === 'all' || tool.category === category;
        return matchesSearch && matchesCategory;
    });
}

// Render tools to the grid
function renderTools(filteredTools) {
    toolsGrid.innerHTML = filteredTools.map(createToolCard).join('');
}

// Initialize the page
function init() {
    // Initial render
    renderTools(tools);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        const filteredTools = filterTools(e.target.value, activeCategory);
        renderTools(filteredTools);
    });

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter and render tools
            const category = button.dataset.category;
            const searchQuery = searchInput.value;
            const filteredTools = filterTools(searchQuery, category);
            renderTools(filteredTools);
        });
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);