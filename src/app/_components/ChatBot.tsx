import SendIcon from "../_icons/SendIcon";
import XIcon from "../_icons/XIcon";

type ChatBotProps = {
  onClose: () => void;
};

export default function ChatBot({ onClose }: ChatBotProps) {
  return (
    <div className="border rounded-lg bg-white">
      <div className="h-12 px-4 py-2 flex justify-between items-center">
        <div className="text-[16px] font-bold">Chat assistant</div>
        <div
          className="w-8 h-8 flex justify-center items-center border rounded-md cursor-pointer"
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>

      <div className="h-72 py-4 px-6 border-t border-b overflow-y-auto">
        <div className="flex flex-col gap-2">
          <div className="self-start rounded-xl bg-black/90 text-white py-2 px-4 max-w-xs">
            How can I help you today?
          </div>
        </div>
      </div>

      <div className="py-2 px-4 flex flex-row gap-2">
        <input
          placeholder="Type your message..."
          className="w-75 h-10 py-2 px-3 border rounded-lg"
        />
        <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
