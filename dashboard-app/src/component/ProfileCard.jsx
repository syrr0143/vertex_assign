import { Linkedin, Mail, Twitter } from "lucide-react";
import { User } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function ProfileCard({ mobile = false }) {
  return (
    <div className="bg-[#111] rounded-lg p-6 mb-6 border border-gray-500 ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-24 h-24 justify-center bg-[#222] rounded-lg overflow-hidden flex items-center justify-center">
          <User className="w-24 h-24  text-gray-400" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row gap-2">
            <div>
              <h3 className="text-xl font-semibold">Mr A</h3>
              <p className="text-sm text-gray-400">Co-Founder & CEO @vertx</p>
            </div>
            <div>
              <CheckCircle className="w-4 h-4 text-blue-500" />
            </div>
          </div>

          <button className="rounded-full badge bg-white  text-black text-md font-medium px-2 my-2  flex items-center">
            Entrepreneur
          </button>
          <div className="flex gap-2 mt-4">
            <a href="#" className="p-1.5 bg-[#0077B5] rounded-md">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-1.5 bg-[#222] rounded-md">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-1.5 bg-[#222] rounded-md">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
