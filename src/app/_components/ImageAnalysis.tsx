"use client";

import { useState, useEffect } from "react";
import StarIcon from "@/app/_icons/StarIcon";
import FileIcon from "../_icons/FileIcon";
import ReloadIcon from "../_icons/ReloadIcon";
import TrashIcon from "../_icons/TrashIcon";
import axios from "axios";

export default function ImageAnalysis() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [blob, setBlob] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBlob(file);
      setImageUrl(URL.createObjectURL(file)); // preview-д зориулж
      console.log(file, "сонгогдсон файл");
    }
  };

  const handleGenerate = async () => {
    if (!blob) return;

    const formData = new FormData();
    formData.append("file", blob);

    try {
      const { data } = await axios.post(
        "http://localhost:1000/file/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Server response:", data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      console.log("imageUrl (from state):", imageUrl);
    }
  }, [imageUrl]);

  function handleRemoveImage() {
    setImageUrl(null);
    setBlob(null);
  }

  const handleReset = () => {
    setImageUrl(null);
    setBlob(null);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <StarIcon />
          <div className="text-[20px]">Image analysis</div>
        </div>
        <div
          onClick={handleReset}
          className="w-12 h-10 border rounded-md flex justify-center items-center"
        >
          <ReloadIcon />
        </div>
      </div>

      <div className="text-[#71717A]">
        Upload a food photo, and AI will detect the ingredients.
      </div>

      {/* File input or preview */}
      {imageUrl === null ? (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full py-2 px-3 border rounded-md"
        />
      ) : (
        <div className="p-1 bg-white border border-gray-200 rounded-lg">
          <div
            className="min-w-50 min-h-33.25 rounded-md border bg-center bg-cover flex items-end justify-end p-4 "
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div
              onClick={handleRemoveImage}
              className="w-6 h-6 bg-white border rounded-sm flex justify-center items-center cursor-pointer"
            >
              <TrashIcon />
            </div>
          </div>
        </div>
      )}

      {/* Generate button */}
      <div className="flex justify-end">
        <button
          onClick={handleGenerate}
          disabled={!blob}
          className="py-2 px-3 bg-black text-white rounded-md cursor-pointer"
        >
          Generate
        </button>
      </div>

      {/* Summary section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[20px] font-bold">
          <FileIcon />
          <div>Here is the summary</div>
        </div>
        <input
          disabled
          placeholder="First, enter your image to recognize ingredients."
          className="w-full py-2 px-3 rounded-md border"
        />
      </div>
    </div>
  );
}
