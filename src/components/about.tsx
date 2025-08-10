import { Calendar, CheckCircle, Clock, MapPin } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Walk</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our mission is to raise awareness and advocate for accessible sickle cell treatment in Nigeria
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Why This Walk Matters</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Sickle cell disease affects millions of Nigerians, yet access to life-saving medications and treatments remains limited.
                            While patients in the UK and other developed countries have access to comprehensive care, Nigerian patients often struggle
                            to afford or find essential medications.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our walk aims to bring attention to this healthcare disparity and advocate for policy changes that will make
                            sickle cell treatments more accessible and affordable in Nigeria.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Raise awareness about sickle cell disease</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Advocate for accessible treatment options</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Support sickle cell warriors and families</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">Build a stronger community network</span>
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
                                <p>Saturday, March 15, 2026</p>
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