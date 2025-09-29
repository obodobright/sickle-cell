import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = ({ scrollToSection }: { scrollToSection: (scrolls: string) => void }) => {
  return (
    <footer className="bg-white shadow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/sickle-cell.jpg" width={100} height={100} alt="logo" className="w-" />
            </div>
            <p className="text-gray-700">
              Walking together for accessible sickle cell treatment in Nigeria.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-60 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className=" hover:bg-blue-500 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
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
                <span>Olusgataiwotomiwaalice@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Lagos Island, Lagos State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-700 mb-4">Stay updated on our advocacy efforts</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
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
