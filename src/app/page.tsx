import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ImageAnalysis from "./_components/ImageAnalysis";
import IngredientRecognition from "./_components/IngredientRecognition";
import ImageCreator from "./_components/ImageCreator";

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

        <TabsContent value="analysis">
          <ImageAnalysis />
        </TabsContent>

        <TabsContent value="recognition">
          <IngredientRecognition />
        </TabsContent>

        <TabsContent value="creator">
          <ImageCreator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
