import StarIcon from "@/app/_icons/StarIcon";
import FileIcon from "../_icons/FileIcon";
import ReloadIcon from "../_icons/ReloadIcon";

export default function IngredientRecognition() {
  return (
    <div className="flex gap-6 flex-col">
      <div className="gap-2 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <StarIcon />
            <div className="text-[20px]">Ingredient recognition</div>
          </div>
          <div className="w-12 h-10 border rounded-md flex justify-center items-center">
            <ReloadIcon />
          </div>
        </div>

        <div className="text-[#71717A]">
          Describe the food, and AI will detect the ingredients.
        </div>

        <textarea
          placeholder="Орц тодорхойлох"
          className="w-full py-2 px-3 border rounded-md min-h-31"
        />

        <div className="flex justify-end">
          <button className="py-2 px-3 bg-black text-white rounded-md">
            Generate
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[20px] font-bold">
          <FileIcon />
          <div>Identified Ingredients</div>
        </div>

        <input
          disabled
          placeholder="First, enter your text to recognize ingredients."
          className="w-full py-2 px-3 rounded-md border"
        />
      </div>
    </div>
  );
}
