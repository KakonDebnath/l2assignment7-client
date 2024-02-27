import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import { useContext } from 'react';

const ColdWeatherTipsSection = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <section
      className={cn('py-12 bg-gray-100', {
        'bg-[#0D1426] text-[#94A3B8]': themeContext?.theme === 'dark',
      })}
    >
      <div className="container mx-auto">
        <h2>Cold Weather Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className={cn(
              'p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl'
            )}
          >
            <h3
              className={cn('text-xl font-bold mb-2 text-blue-600', {
                'text-[#38BDF8]': themeContext?.theme === 'dark',
              })}
            >
              Layer Up
            </h3>
            <p className="text-dark-gray">
              Dress in layers to trap heat and protect against cold
              temperatures. Start with a moisture-wicking base layer, add
              insulating layers, and finish with a waterproof and windproof
              outer layer.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <h3
              className={cn('text-xl font-bold mb-2 text-blue-600', {
                'text-[#38BDF8]': themeContext?.theme === 'dark',
              })}
            >
              Stay Dry
            </h3>
            <p className="text-dark-gray">
              Wet clothing can lead to rapid heat loss, increasing the risk of
              hypothermia. Ensure your clothing stays dry by wearing waterproof
              gear and changing out of wet clothes promptly.
            </p>
          </div>

          <div className="bg-yellow-300 rounded-xl">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/ZVbdWmV/pexels-julia-m-cameron-6995109.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdWeatherTipsSection;
