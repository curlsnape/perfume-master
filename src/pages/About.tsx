import React from 'react';

const About = () => {
  const LightOrb = ({ index }) => (
    <div 
      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-lg"
      style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.2)',
        animationDelay: `${index * 0.1}s`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-5 mb-20">
          <h1 className="text-4xl font-[Doren] md:text-6xl lg:text-7xl font-light tracking-widest text-gray-800 mb-4">
            DISCOVER OUR JOURNEY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 to-zinc-500 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left Content - Lighting Display */}
          <div className="transform hover:scale-[1.02] transition-transform duration-300 ease-out">
            <div className="relative">
              {/* Main Lighting Pattern */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="relative h-80 md:h-96 flex items-center justify-center">
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400"></div>
                  </div>
                  
                  {/* Light Orbs Grid */}
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {[...Array(9)].map((_, index) => (
                      <LightOrb key={index} index={index} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mt-8">
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  Founded in 1968 by Chris and Claire Turner, 
                  we began as a small family business with a 
                  passion for handcrafted lighting solutions 
                  on the guiding principles of designing 
                  lights of uncompromising quality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Excellence Section */}
          <div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-800 mb-12">
                REDEFINING<br />
                EXCELLENCE
              </h2>
              
              {/* Product Showcase */}
              <div className="relative group cursor-pointer">
                <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-8 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="relative h-64 md:h-80">
                    {/* Pendant Light Illustration */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-16 bg-gray-800 opacity-60"></div>
                    </div>
                    
                    {/* Light Fixture */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-48 h-32 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full shadow-xl opacity-90"></div>
                      <div className="absolute inset-0 w-48 h-32 bg-gradient-to-b from-white via-transparent to-transparent rounded-full opacity-30"></div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-amber-300 rounded-full blur-3xl opacity-20"></div>
                    
                    {/* Shelf/Surface */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-900 to-transparent rounded-b-2xl"></div>
                  </div>
                </div>
                
               
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-black tracking-wide">SINCE</div>
                    <div className="text-xl font-bold text-gray-800">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Content */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-base font-[poppins]  text-gray-600 tracking-tight leading-relaxed mb-8">
              We are driven by a passion for perfection and a dedication to discerning exceptional quality. 
              Our journey continues to illuminate spaces with timeless elegance and innovative design.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-zinc-400"></div>
              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-zinc-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;