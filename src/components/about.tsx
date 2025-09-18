import { Calendar, CheckCircle, Clock, MapPin } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white" role="main" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-4">About the Walk</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our mission is to raise awareness and advocate for accessible sickle cell treatment in Nigeria
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Why This Walk Matters</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Warriors Walk 2026 (also known as Warriors Stride) is a Guinness World Record attempt for the Longest Walk by Sickle Cell Warriors, set to take place on the Third Mainland Bridge, Lagos, Nigeria, in 2026.

                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The event will gather Sickle Cell Warriors, advocates, health experts, and the general public for a unified purpose — to raise awareness, inspire resilience, and call for access to modern, affordable treatment for sickle cell disease.

                        </p>

                        <div className="space-y-4">
                            <h4>Why It Matters
                            </h4>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">1 in 4 Nigerians carries the sickle cell gene</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Over 150,000 children are born yearly with SCD in Nigeria, the highest globally.</span>
                            </div>
                            {/* <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Treatments that improve quality of life exist, but they remain inaccessible or unaffordable for many patients.</span>
                            </div> */}
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">This walk is not just about breaking a record — it’s about changing lives.</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-6">Key Statistics</h4>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-4">
                                <div className="text-2xl font-bold text-red-600">150,000+</div>
                                <div className="text-sm text-gray-600">Nigerians born with sickle cell disease annually</div>
                            </div>
                            <div className="bg-white rounded-xl p-4">
                                <div className="text-2xl font-bold text-red-600">4-6 Million</div>
                                <div className="text-sm text-gray-600">Nigerians living with sickle cell disease</div>
                            </div>
                            <div className="bg-white rounded-xl p-4">
                                <div className="text-2xl font-bold text-red-600">80%</div>
                                <div className="text-sm text-gray-600">Lack access to proper treatment</div>
                            </div>
                            <div className="bg-white rounded-xl p-4">
                                <div className="text-2xl font-bold text-red-600">50%</div>
                                <div className="text-sm text-gray-600">Don&#39;t live past age 5 without proper care</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Details */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-center space-x-4">
                            <Calendar className="h-8 w-8" />
                            <div>
                                <h4 className="font-semibold">Date</h4>
                                <p>Saturday, March 14, 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="h-8 w-8" />
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p>Third Mainland Bridge, Lagos State</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Clock className="h-8 w-8" />
                            <div>
                                <h4 className="font-semibold">Time</h4>
                                <p>7:00 AM - 12:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}