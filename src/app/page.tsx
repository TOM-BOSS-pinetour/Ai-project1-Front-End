import StarIcon from "@/app/_icons/StarIcon";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReloadIcon from "./_icons/ReloadIcon";
import FileIcon from "./_icons/FileIcon";

export default function Home() {
  return (
    <div className="bg-white flex items-center flex-col">
      <div className="text-black font-sans text-[16px] font-bold py-4 px-12">
        AI tools
      </div>

      <Tabs defaultValue="analysis" className="w-145 flex py-6 gap-6">
        <TabsList>
          <TabsTrigger value="analysis">Image analysis</TabsTrigger>
          <TabsTrigger value="recognition">Ingredient recognition</TabsTrigger>
          <TabsTrigger value="creator">Image creator</TabsTrigger>
        </TabsList>
        {/*  */}
        {/* Image analysis */}
        <TabsContent value="analysis" className="flex gap-6 flex-col">
          <div className="gap-2 flex flex-col">
            <div className="flex flex-row gap-2 items-start justify-between font-sans">
              <div className="flex flex-row justify-between items-center gap-2">
                <div>
                  <StarIcon />
                </div>
                <div className="text-[20px]">Image analysis</div>
              </div>
              <div className="w-12 h-10 border border-[#E4E4E7] flex justify-center items-center rounded-md">
                <ReloadIcon />
              </div>
            </div>
            <div className="text-[#71717A]">
              Upload a food photo, and AI will detect the ingredients.
            </div>
            <input
              type="file"
              placeholder="JPG , PNG"
              className="w-full py-2 px-3 border rounded-md"
            ></input>
            <div className="flex justify-end">
              <button className="flex py-2 px-3 bg-black w-23.5 text-white rounded-md">
                Generate
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2 text-[20px] font-bold">
              <div>
                <FileIcon />
              </div>
              <div>Here is the summary</div>
            </div>
            <div>
              <input
                placeholder="First, enter your image to recognize an ingredients."
                className="w-full py-2 px-3 rounded-md border"
              ></input>
            </div>
          </div>
        </TabsContent>
        {/*  */}
        {/* Ingredient recognition */}
        <TabsContent value="recognition">
          Change your password here.
        </TabsContent>
        {/*  */}
        {/* Image creator */}
        <TabsContent value="creator">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
