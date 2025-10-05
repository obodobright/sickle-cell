import { ChevronRight, Facebook, Heart, Instagram, Share2, Target, Twitter, Users } from "lucide-react"
import { CiInstagram, CiTwitter } from "react-icons/ci"
import { FaTiktok } from "react-icons/fa"

export const SupportSection = ({ scrollToSection }: { scrollToSection: (scrolls: string) => void }) => {
    return (
        <section id="support" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Support</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        There are many ways to get involved and make a difference in the fight for sickle cell awareness
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-red-100 rounded-xl p-4 w-fit mb-6">
                            <Users className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Join the Walk</h3>
                        <p className="text-gray-600 mb-6">
                            Walk with us on March 14th and show your support for sickle cell awareness. Every step counts!
                        </p>
                        <button
                            onClick={() => scrollToSection('register')}
                            className="text-red-600 cursor-pointer font-semibold hover:text-red-700 flex items-center space-x-2"
                        >
                            <span>Register Now</span>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-blue-100 rounded-xl p-4 w-fit mb-6">
                            <Heart className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
                        <p className="text-gray-600 mb-6">
                            Help us organize and execute a successful event. We need volunteers for various roles on event day.
                        </p>
                        <button
                            onClick={() => scrollToSection('register')}
                            className="text-blue-600 cursor-pointer font-semibold hover:text-blue-700 flex items-center space-x-2"
                        >
                            <span>Volunteer Today</span>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 rounded-xl p-4 w-fit mb-6">
                            <Target className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
                        <p className="text-gray-600 mb-6">
                            Your financial contribution helps us advocate for better healthcare policies and support families.
                        </p>
                        <button
                            onClick={() => scrollToSection('donate')}
                            className="text-green-600 cursor-pointer font-semibold hover:text-green-700 flex items-center space-x-2"
                        >
                            <span>Donate Now</span>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-purple-100 rounded-xl p-4 w-fit mb-6">
                            <Share2 className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Share Awareness</h3>
                        <p className="text-gray-600 mb-6">
                            Spread the word on social media and help us reach more people with our important message.
                        </p>
                        <div className="flex space-x-3">

                            <a href="https://tiktok.com/warriorsstride">
                                <button className="text-purple-600 hover:text-purple-700">
                                    <FaTiktok className="" />
                                </button>
                            </a>
                            <a href="https://instagram.com/Warriorstrideng">
                                <button className="text-purple-600 hover:text-purple-700">
                                    <CiInstagram className="h-5 w-5" />
                                </button>
                            </a>
                            <a href="https://x.com/Warriorsstride">
                                <button className=" text-purple-600 hover:text-purple-700">
                                    <CiTwitter className="h-5 w-5" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}