import React, { use, type Dispatch, type SetStateAction } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

type ItechCardsProps = {
  dataPromise: Promise<any[]>;
  techCard: any[];
  setTechCard: Dispatch<SetStateAction<any[]>>;
};

export const TechCards = ({ dataPromise, techCard, setTechCard }: ItechCardsProps) => {
  const data = use(dataPromise);

  const handleAddToStack = (selectedCard: any) => {
    const filteredCard = techCard.filter((card) => card.id === selectedCard.id);
    if (filteredCard.length === 0) {
      setTechCard([...techCard, selectedCard]);
      toast.success(`${selectedCard.name} added to stack!`); 
    }
  };

  return (
    <section>
      <h2 className="font-extrabold text-3xl tracking-tight text-gray-900 mb-6">
        Explore the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
          Technologies
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((card) => {
          const isSelected = techCard.filter((item) => item.id === card.id).length > 0;

          return (
            <div
              key={card.id || card.name}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {card.icon && (
                      <img src={card.icon} alt={card.name} className="w-8 h-8 object-contain" />
                    )}
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                    {card.badge || 'Popular'}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D81B7E] transition-colors">
                    {card.name}
                  </h3>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                  {card.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <h2>{card.category}</h2>
                  <h2>{card.difficulty}</h2>
                  <h2 className="flex items-center gap-1 font-semibold text-gray-700">
                    <FaStar className="text-amber-400" />
                    {card.rating}
                  </h2>
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={isSelected}
                  onClick={() => handleAddToStack(card)}
                  className={`w-full h-10 rounded-xl font-semibold text-xs transition-all shadow-sm ${
                    isSelected
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300'
                      : 'bg-black hover:bg-gray-800 text-white active:scale-[0.98]'
                  }`}
                >
                  {isSelected ? 'Added to Stack' : 'Add To Stack'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechCards;