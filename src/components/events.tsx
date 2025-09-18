import { Clock, Heart, MapPin, Share2, Shield, Users } from "lucide-react"

export const EventsSection = () => {
    return (
        <section id="eventinfo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Day Information</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know for a successful walk experience
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Route Map */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Walk Route</h3>
                        <div className="bg-blue-100 rounded-xl p-8 h-64 flex items-center justify-center mb-6">
                            <div className="text-center text-blue-800">
                                <MapPin className="h-16 w-16 mx-auto mb-4" />
                                <p className="text-lg font-semibold">Interactive Route Map</p>
                                <p className="text-sm">Third Mainland Bridge - Lagos Island</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                <span className="font-medium">Distance:</span>
                                <span className="text-red-600 font-semibold">11 Kilometers</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                <span className="font-medium">Start Point:</span>
                                <span className="text-red-600 font-semibold">Oworonsoki End</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                <span className="font-medium">End Point:</span>
                                <span className="text-red-600 font-semibold">Lagos Island</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                <span className="font-medium">Estimated Time:</span>
                                <span className="text-red-600 font-semibold">1-3 Hours</span>
                            </div>
                        </div>
                    </div>

                    {/* Schedule & Safety */}
                    <div className="space-y-8">
                        <div className="bg-red-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    <div>
                                        <div className="font-semibold">6:30 AM</div>
                                        <div className="text-sm text-gray-600">Registration & Check-in Opens</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    <div>
                                        <div className="font-semibold">7:30 AM</div>
                                        <div className="text-sm text-gray-600">Opening Ceremony & Speeches</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    <div>
                                        <div className="font-semibold">8:00 AM</div>
                                        <div className="text-sm text-gray-600">Walk Begins</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    <div>
                                        <div className="font-semibold">10:30 AM</div>
                                        <div className="text-sm text-gray-600">Closing Ceremony</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    <div>
                                        <div className="font-semibold">12:00 PM</div>
                                        <div className="text-sm text-gray-600">Event Ends</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Guidelines</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-5 w-5 text-yellow-600 mt-1" />
                                    <span className="text-gray-700">Wear comfortable walking shoes</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-5 w-5 text-yellow-600 mt-1" />
                                    <span className="text-gray-700">Bring water bottle and stay hydrated</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-5 w-5 text-yellow-600 mt-1" />
                                    <span className="text-gray-700">Follow traffic marshals and stay in designated areas</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-5 w-5 text-yellow-600 mt-1" />
                                    <span className="text-gray-700">Emergency medical team will be available</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-5 w-5 text-yellow-600 mt-1" />
                                    <span className="text-gray-700">Arrive early for smooth check-in process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What to Bring */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Bring</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-4">
                                <Heart className="h-8 w-8 text-red-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Your Energy</h4>
                            <p className="text-sm text-gray-600">Come with enthusiasm and positive spirit</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-4">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Family & Friends</h4>
                            <p className="text-sm text-gray-600">Invite others to join the cause</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-4">
                                <Share2 className="h-8 w-8 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Camera/Phone</h4>
                            <p className="text-sm text-gray-600">Capture and share the moments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}