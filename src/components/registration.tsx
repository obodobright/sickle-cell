import { useState } from "react";

export const Registration = () => {
    const [registrationForm, setRegistrationForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        tshirtSize: 'M',
        comments: ''
    });
    const [volunteerForm, setVolunteerForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comments: ''
    });

    const handleRegistrationSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Thank you for registering! We will contact you with more details.');
        setRegistrationForm({
            name: '',
            email: '',
            phone: '',
            address: '',
            tshirtSize: 'M',
            comments: ''
        });
    };

    const handleVolunteerSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Thank you for volunteering! We will be in touch soon.');
        setVolunteerForm({
            name: '',
            email: '',
            phone: '',
            address: '',
            comments: ''
        });
    };
    return (
        <section id="register" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Register & Volunteer</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join us in making a difference. Register to walk or volunteer for the event.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Registration Form */}
                    <div className="bg-red-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Register to Walk</h3>
                        <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={registrationForm.name}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={registrationForm.email}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={registrationForm.phone}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    required
                                    value={registrationForm.address}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, address: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">T-Shirt Size</label>
                                <select
                                    value={registrationForm.tshirtSize}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, tshirtSize: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                >
                                    <option value="XS">Extra Small (XS)</option>
                                    <option value="S">Small (S)</option>
                                    <option value="M">Medium (M)</option>
                                    <option value="L">Large (L)</option>
                                    <option value="XL">Extra Large (XL)</option>
                                    <option value="XXL">2X Large (XXL)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Comments (Optional)</label>
                                <textarea
                                    value={registrationForm.comments}
                                    onChange={(e) => setRegistrationForm({ ...registrationForm, comments: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    rows={3}
                                    placeholder="Any additional comments..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-lg transition-colors"
                            >
                                Register to Walk
                            </button>
                        </form>
                    </div>

                    {/* Volunteer Form */}
                    <div className="bg-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
                        <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={volunteerForm.name}
                                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={volunteerForm.email}
                                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={volunteerForm.phone}
                                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    required
                                    value={volunteerForm.address}
                                    onChange={(e) => setVolunteerForm({ ...volunteerForm, address: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer?</label>
                                <textarea
                                    required
                                    value={volunteerForm.comments}
                                    onChange={(e) => setVolunteerForm({ ...volunteerForm, comments: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows={4}
                                    placeholder="Tell us why you want to volunteer and how you'd like to help..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition-colors"
                            >
                                Apply to Volunteer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}