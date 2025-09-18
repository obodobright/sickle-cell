import { Heart, Star, Target, Users } from "lucide-react"

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories from Our Community</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from sickle cell warriors, families, and supporters who inspire us every day
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <Heart className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Adunni Okafor</h4>
                                <p className="text-sm text-gray-600">Sickle Cell Warrior</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            &#34;Living with sickle cell in Nigeria has been challenging, but events like this give me hope.
                            When I see the community coming together, I believe we can make treatment accessible for everyone.&#34;
                        </p>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Mrs. Sarah Ibrahim</h4>
                                <p className="text-sm text-gray-600">Mother of SC Patient</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            &#34;My daughter was diagnosed at age 3. The lack of accessible medication has been our biggest
                            challenge. This walk represents hope for all families like ours.&#34;
                        </p>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <Target className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Dr. Emeka Nwankwo</h4>
                                <p className="text-sm text-gray-600">Hematologist</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            &#34;As a healthcare professional, I&#39;ve seen the impact of limited access to sickle cell treatment.
                            This advocacy walk is crucial for bringing about the policy changes we desperately need.&#34;
                        </p>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video Testimonials Section */}
                <div className="bg-white hidden rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Video Stories</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                            <div className="text-center text-gray-600">
                                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Heart className="h-8 w-8 text-red-600" />
                                </div>
                                <p className="font-semibold">Kemi&#39;s Journey</p>
                                <p className="text-sm">A warrior&#39;s story of hope</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                            <div className="text-center text-gray-600">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>
                                <p className="font-semibold">Family Support</p>
                                <p className="text-sm">How families cope together</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}