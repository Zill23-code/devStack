import type { Dispatch, SetStateAction } from 'react';
import type { TechItem } from './Components/TechCards';

type IStackCardProps = {
  techCard: TechItem[];
  setTechCard: Dispatch<SetStateAction<TechItem[]>>;
};

const StackCard = ({ techCard, setTechCard }: IStackCardProps) => {
  // Remove single item by ID
  const handleRemove = (id: string | number) => {
    setTechCard((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all 
  const handleRemoveAll = () => {
    setTechCard([]);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <h2 className="text-xl font-normal text-gray-900">Your Stack</h2>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
          {techCard.length} {techCard.length === 1 ? 'Technology' : 'Technologies'} Selected
        </span>
      </div>

      {techCard.length === 0 ? (
        <div className="py-8 text-center text-gray-400 text-xs border border-dashed border-gray-200 rounded-xl">
          Your Technology Stack is empty.
        </div>
      ) : (
        <>
          <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1 mb-4">
            {techCard.map((iCard) => (
              <div
                key={iCard.id}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {iCard.icon ? (
                    <img src={iCard.icon} alt={iCard.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <div className="w-6 h-6 rounded bg-pink-100 text-[#D81B7E] font-bold text-[10px] flex items-center justify-center">
                      {iCard.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-xs text-gray-800">{iCard.name}</h4>
                    <span className="text-[10px] text-gray-400">{iCard.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(iCard.id)}
                  aria-label={`Remove ${iCard.name}`}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 text-xs font-bold transition-all leading-none"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="w-full h-10 rounded-xl font-semibold text-xs border border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackCard;