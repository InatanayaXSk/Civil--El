import React from 'react';

const Contents = () => {
  return (
    <div className="sustainable-agriculture-container max-w-7xl mx-auto px-4">
      <div id="what-is-sustainable-agriculture" className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Protecting Plant Health Through Smart Detection</h1>
        <p className="text-justify mb-4">
          Welcome to LeafGuard - where technology meets sustainable agriculture. Our innovative plant leaf disease detection system helps farmers maintain crop health while promoting environmental sustainability.
        </p>
        <p className="text-justify">
          By combining advanced AI technology with eco-friendly farming methods, we're building a more resilient and sustainable future for agriculture. Our system enables early disease detection while supporting environmentally conscious farming practices.
        </p>
      </div>

      <div id="disease-detection" className="mb-12">
        <h1 className="text-3xl font-bold mb-4">AI-Powered Plant Disease Detection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border p-4 rounded-lg shadow bg-green-50">
            <h3 className="font-bold text-green-700 mb-2">SDG 2: Zero Hunger</h3>
            <p className="text-sm">Early detection of diseases like Early Blight helps protect food security by preventing crop losses</p>
          </div>
          <div className="border p-4 rounded-lg shadow bg-green-50">
            <h3 className="font-bold text-green-700 mb-2">SDG 12: Responsible Production</h3>
            <p className="text-sm">Promoting sustainable farming through precise disease identification and eco-friendly treatments</p>
          </div>
          <div className="border p-4 rounded-lg shadow bg-green-50">
            <h3 className="font-bold text-green-700 mb-2">SDG 15: Life on Land</h3>
            <p className="text-sm">Supporting biodiversity through sustainable disease management and reduced chemical use</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">Disease Name:</h3>
              <p>Early Blight (Alternaria solani)</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Confidence Level:</h3>
              <p>High. The image clearly shows the characteristic symptoms of early blight on a tomato leaf.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Symptoms Visible:</h3>
              <p>The leaf displays numerous dark brown to black, concentrically ringed lesions. These lesions are mostly circular to somewhat irregular and are distributed across the leaf surface. The leaf tissue surrounding these lesions shows a yellowing or chlorosis. The lesions are sunken and target-spot-like, typical of early blight.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Sustainable Treatment Plan</h2>
            <div className="space-y-3">
              <p><span className="font-bold">Primary Treatment:</span> Bordeaux Mixture (eco-friendly fungicide)</p>
              <p><span className="font-bold">Important Note:</span> While Bordeaux Mixture can be effective, always follow label instructions carefully. Consider the severity of the infection and the size of your planting area when deciding on the best course of action.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Prevention Tips</h2>
            <ul className="space-y-2">
              <li><span className="font-bold">Crop Rotation:</span> Rotate tomato crops with non-host plants</li>
              <li><span className="font-bold">Sanitation:</span> Remove and destroy infected plant debris</li>
              <li><span className="font-bold">Proper Spacing:</span> Ensure good air circulation between plants</li>
              <li><span className="font-bold">Watering:</span> Water at the base of plants to keep foliage dry</li>
              <li><span className="font-bold">Resistant Varieties:</span> Choose resistant tomato varieties</li>
              <li><span className="font-bold">Clean Tools:</span> Disinfect pruning tools regularly</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="case-studies" className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Organic Farm Implementation</h2>
            <p className="text-justify">
              An award-winning organic farm reduced crop losses by 60% using our early detection system while maintaining their chemical-free status. They combined our technology with regular leaf monitoring, integrated pest management strategies, and natural predator encouragement.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Smart Greenhouse Success</h2>
            <p className="text-justify">
              A commercial greenhouse operation achieved 45% reduction in treatment costs by implementing our automated monitoring system, using early detection to prevent disease spread, and adopting recommended organic treatments while maintaining optimal growing conditions.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">AI-Powered Detection</h2>
            <p className="text-justify">
              Our cutting-edge artificial intelligence technology identifies plant diseases through leaf analysis with 95% accuracy, providing early warning of potential infections and recommending organic treatment options while tracking plant health patterns across growing seasons.
            </p>
          </div>
        </div>
      </div>

      <div id="getting-started" className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Initial Steps</h2>
            <ul className="space-y-2">
              <li>Install our leaf scanning application</li>
              <li>Set up monitoring protocols for your crops</li>
              <li>Connect with our sustainable farming experts</li>
              <li>Develop an integrated plant health strategy</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Implementation</h2>
            <ul className="space-y-2">
              <li>Begin regular leaf scanning and monitoring</li>
              <li>Follow organic treatment recommendations</li>
              <li>Track effectiveness and adapt as needed</li>
              <li>Document improvements in plant health</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="benefits" className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Benefits of Smart Disease Detection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Environmental Stewardship</h2>
            <p className="text-justify">
              Our approach reduces the need for preventive chemical spraying by enabling precise, targeted treatment only when necessary. This promotes biodiversity, protects water systems, and supports beneficial insect populations while maintaining crop health.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3">Economic Advantages</h2>
            <p className="text-justify">
              Through early disease detection, reduced treatment costs, and improved crop quality, our system helps farmers achieve better yields while accessing premium markets for sustainably grown produce.
            </p>
          </div>
        </div>
      </div>

      <div id="join-us" className="mb-12 text-center bg-green-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Start Protecting Your Crops Today!</h1>
        <p className="mb-4">
          Ready to transform your farming practices with smart disease detection and sustainable agriculture?
        </p>
        <a href="mailto:info@example.com?subject=Join%20LeafGuard&body=I%20am%20interested%20in%20implementing%20smart%20disease%20detection." className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Get Started Now
        </a>
      </div>

      <footer className="mt-12 p-4 bg-gray-100 rounded-lg">
        <div className="text-center">
          <p className="font-bold">
            <a href="https://www.bit.ly/m/techbire" className="hover:text-green-600">About Us</a> | 
            <a href="terms.html" className="hover:text-green-600">Terms of Service</a>
          </p>
          <p className="italic">
            <b>techbire</b> © 2023 LeafGuard - Plant Disease Detection. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contents;