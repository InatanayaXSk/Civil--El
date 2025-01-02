import React from 'react';

const articles = () => {
  const sections = [
    {
      title: "What is Sustainable Agriculture?",
      content: "Sustainable agriculture aims to meet present needs without compromising the ability of future generations to meet their own. It involves practices that protect the environment, enhance soil quality, conserve natural resources, and support local communities."
    },
    {
      title: "Benefits",
      subsections: [
        {
          title: "Environmental Stewardship",
          content: "Sustainable agriculture offers numerous benefits in terms of environmental stewardship. It prioritizes soil health, reduces chemical inputs, and promotes biodiversity conservation."
        },
        {
          title: "Economic Resilience",
          content: "Sustainable agriculture fosters economic resilience through diversified income streams, improved soil health, and reduced input costs help farmers weather economic fluctuations."
        },
        {
          title: "Community Development",
          content: "It fosters economic stability by increasing farm incomes and creating local jobs, enhances food security, preserves the environment, promotes healthier communities."
        }
      ]
    },
    {
      title: "Technology in Sustainable Agriculture",
      subsections: [
        {
          title: "Precision Farming",
          content: "Utilizes advanced technologies such as GPS, drones, and sensors to collect data about soil conditions, crop health, and weather patterns."
        },
        {
          title: "Smart Irrigation",
          content: "Smart irrigation systems use sensors and automation to deliver the right amount of water to crops based on their specific needs."
        },
        {
          title: "Blockchain",
          content: "Blockchain technology is being explored as a means to enhance transparency and traceability in the food supply chain."
        }
      ]
    },
    {
      title: "Case Studies",
      subsections: [
        {
          title: "Award-Winning Organic Farm",
          content: "Demonstrates elimination of synthetic chemicals, embracing eco-friendly farming with biodiversity conservation through hedgerows and wildflower meadows."
        },
        {
          title: "Permaculture Garden",
          content: "Showcases a thriving ecosystem designed with sustainable practices, combining diverse plantings, crop rotations, and companion planting."
        },
        {
          title: "Vertical Farming",
          content: "Utilizing cutting-edge technology and controlled environments to maximize crop yields in limited urban spaces, reducing water usage and eliminating harmful pesticides."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg border border-gray-200 overflow-hidden shadow-lg">
          <div className="bg-green-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-green-800">{section.title}</h2>
          </div>
          <div className="p-6 bg-white">
            {section.content && (
              <p className="text-gray-700 mb-6">{section.content}</p>
            )}
            {section.subsections && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.subsections.map((subsection, subIndex) => (
                  <div 
                    key={subIndex} 
                    className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      {subsection.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{subsection.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default articles;