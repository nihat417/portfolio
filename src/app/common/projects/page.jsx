import React from 'react'
import Card from '@/app/components/projects/Card';

const Projects = () => {
  const cardsData = [
    {
      image: "https://source.unsplash.com/random/1",
      description: "This is a sample card component with a gradient border and shadow effects.",
      githubLink: "https://github.com/your-repo1",
      about: "https://github.com/your-repo1",
      demoLink: "https://your-demo-link1.com",
    },
    {
      image: "https://source.unsplash.com/random/2",
      description: "Another example of a card with different content.",
      githubLink: "https://github.com/your-repo2",
      about: "https://github.com/your-repo1",
      demoLink: "https://your-demo-link2.com",
    },
    {
      image: "https://source.unsplash.com/random/3",
      description: "More content for the card component.",
      about: "https://github.com/your-repo1",
      githubLink: "https://github.com/your-repo3",
      demoLink: "https://your-demo-link3.com",
    },
    {
      image: "https://source.unsplash.com/random/4",
      description: "This card has some different description.",
      githubLink: "https://github.com/your-repo4",
      about: "https://github.com/your-repo1",
      demoLink: "https://your-demo-link4.com",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center p-6 my-[200px]">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            description={card.description}
            githubLink={card.githubLink}
            about={card.about}
            demoLink={card.demoLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;