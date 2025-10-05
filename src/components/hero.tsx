import { Calendar, Heart, MapPin } from "lucide-react"


interface HeroProps {
    scrollToSection: (scrolls: string) => void;
}
export const HeroSection = ({ scrollToSection }: HeroProps) => {
    return (
        <section id="home" className="pt-30 md:pt-20 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center" role="banner" aria-label="Hero section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Sickle Cell Walk
                                <span className="text-red-600"> Lagos 2026</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Walking Together for Access to Treatment in Nigeria
                            </p>
                            <p className="text-lg text-gray-500">
                                Join us at Third Mainland Bridge as we advocate for accessible sickle cell treatment and medications in Nigeria
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('register')}
                                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                Register to Walk
                            </button>
                            <button
                                onClick={() => scrollToSection('register')}
                                className="bg-white cursor-pointer hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                            >
                                Volunteer
                            </button>
                            <button
                                onClick={() => scrollToSection('donate')}
                                className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                Donate Now
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-600">1000+</div>
                                <div className="text-sm text-gray-600">Expected Walkers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-600">1hr</div>
                                <div className="text-sm text-gray-600">Walk Distance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-600">£165m</div>
                                <div className="text-sm text-gray-600">Fundraising Goal</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div style={{ backgroundImage: "url(/walkingstride.png)" }} className="bg-cover bg-center filter grayscale bg-gradient-to-r from-red-100 to-red-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                            <div className="text-center hidden text-red-800">
                                <Heart className="h-24 w-24 mx-auto mb-4" />
                                <p className="text-lg font-semibold">Hero Image/Video</p>
                                <p className="text-sm">Sickle Cell Awareness Walk</p>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-red-600" />
                                <span className="font-semibold text-sm">March 14, 2026</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-red-600" />
                                <span className="font-semibold text-sm">Third Mainland Bridge</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}