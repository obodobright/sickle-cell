import { Mail, MapPin, Phone, } from "lucide-react";
import Image from "next/image";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
export const Footer = ({ scrollToSection }: { scrollToSection: (scrolls: string) => void }) => {
  return (
    <footer className="bg-white shadow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col  gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/sickle-cell.jpg" width={100} height={100} alt="logo" className="w-" />
            </div>
            <p className="text-gray-700">
              Walking together for accessible sickle cell treatment in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="https://tiktok.com/warriorsstride">
                <button className="bg-blue-60 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                  <FaTiktok className="h-5 w-5" />
                </button>
              </a>
              <a href="https://instagram.com/Warriorstrideng">
                <button className="text-gray-700 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                  <CiInstagram className="h-5 w-5" />
                </button>
              </a>
              <a href="https://x.com/Warriorsstride">
                <button className=" hover:bg-blue-500 p-2 rounded-lg transition-colors">
                  <CiTwitter className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-black font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-white"
                >
                  About the Walk
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("register")}
                  className="text-gray-700 hover:text-white"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("donate")}
                  className="text-gray-700 hover:text-white"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-white"
                >
                  Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-black font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 805 385 7501</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>warriorsstride@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Lagos Island, Lagos State, Nigeria</span>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © 2025 Sickle Cell Walk Lagos. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-700 hover:text-white text-sm">Privacy Policy</button>
              <button className="text-gray-700 hover:text-white text-sm">Terms of Service</button>
              <button className="text-gray-700 hover:text-white text-sm">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
