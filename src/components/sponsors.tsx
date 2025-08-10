export const SponsorsPartners = () => {
    return (
        <section id="sponsors" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Sponsors</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Thank you to the organizations supporting our mission
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {[
                        'Lagos State Ministry of Health',
                        'Nigerian Red Cross',
                        'MTN Foundation',
                        'Dangote Foundation',
                        'First Bank Nigeria',
                        'Guaranty Trust Bank'
                    ].map((sponsor, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 h-24 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-xs text-gray-600 font-medium">{sponsor}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join us in making a difference. Partner with us to advocate for accessible sickle cell treatment in Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                            Corporate Partnership
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                            Healthcare Partnership
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}