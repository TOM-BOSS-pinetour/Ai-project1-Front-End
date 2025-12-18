"use client";

import StarIcon from "@/app/_icons/StarIcon";
import ImageIcon from "../_icons/ImageIcon";
import ReloadIcon from "../_icons/ReloadIcon";
import axios from "axios";
import { useState } from "react";

export default function ImageCreator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:1000/image/generate",
        { prompt }
      );
      setImage(data.image);
      console.log("response", data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-6 flex-col">
      <div className="gap-2 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <StarIcon />
            <div className="text-[20px]">Food image creator</div>
          </div>
          <div className="cursor-pointer w-12 h-10 border rounded-md flex justify-center items-center">
            <ReloadIcon />
          </div>
        </div>

        <div className="text-[#71717A]">
          What food image do you want? Describe it briefly.
        </div>

        <textarea
          placeholder="Хоолны тайлбар"
          className="w-full py-2 px-3 border rounded-md min-h-31"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            className="py-2 px-3 bg-black text-white rounded-md"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-145 p-4 border rounded-md min-h-104">
        <div className="flex items-center gap-2 text-[20px] font-bold">
          <ImageIcon />
          <div>Result</div>
        </div>

        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt="Generated"
            className="w-full rounded-md border"
          />
        ) : (
          <input
            disabled
            placeholder="First, enter your text to generate an image."
            className="w-full py-2 px-3 rounded-md border"
          />
        )}
      </div>
    </div>
  );
}
