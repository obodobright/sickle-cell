import { CheckCircle } from "lucide-react"
import { useState } from "react";

export const Donation = () => {
    const [donationAmount, setDonationAmount] = useState(50);

    return (
        <section id="donate" className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your donation helps us advocate for accessible sickle cell treatment in Nigeria
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Fundraising Progress</h3>
                            <div className="bg-gray-200 rounded-full h-4 mb-2">
                                <div className="bg-green-600 h-4 rounded-full w-1/3"></div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>₦650,000 raised</span>
                                <span>₦2,000,000 goal</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Choose Amount</h4>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {[1000, 2500, 5000, 10000].map(amount => (
                                        <button
                                            key={amount}
                                            onClick={() => setDonationAmount(amount)}
                                            className={`p-3 rounded-xl border-2 font-semibold transition-colors ${donationAmount === amount
                                                ? 'border-green-600 bg-green-600 text-white'
                                                : 'border-gray-300 text-gray-700 hover:border-green-600'
                                                }`}
                                        >
                                            ₦{amount.toLocaleString()}
                                        </button>
                                    ))}
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                                        <input
                                            type="number"
                                            min="100"
                                            value={donationAmount}
                                            onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter custom amount"
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg transition-colors mb-4">
                                    Donate ₦{donationAmount.toLocaleString()}
                                </button>

                                <div className="text-center text-sm text-gray-600">
                                    Secure payment via Paystack, Flutterwave, or Stripe
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-green-100 rounded-full p-1">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">₦1,000</div>
                                            <div className="text-sm text-gray-600">Provides awareness materials for 10 people</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-green-100 rounded-full p-1">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">₦5,000</div>
                                            <div className="text-sm text-gray-600">Supports one family with educational resources</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-green-100 rounded-full p-1">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">₦10,000</div>
                                            <div className="text-sm text-gray-600">Funds advocacy efforts for policy change</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-green-100 rounded-full p-1">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">₦25,000+</div>
                                            <div className="text-sm text-gray-600">Helps establish treatment access programs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Monthly Giving</h4>
                            <p className="text-gray-600 mb-4">Make a lasting impact with recurring donations</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                Set Up Monthly Donation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}