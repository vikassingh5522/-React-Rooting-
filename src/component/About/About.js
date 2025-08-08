import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container m-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-center">
                    {/* Image Section */}
                    <div className="md:w-5/12 lg:w-5/12 relative group">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl border-8 border-white transform rotate-1 group-hover:rotate-0 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                                alt="React developers working"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-blue-600/20"></div>
                        </div>
                        <div className="absolute -z-10 w-full h-full bg-blue-200 rounded-2xl -bottom-4 -right-4"></div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            React development is carried out by passionate developers
                        </h2>
                        
                        <div className="mt-8 space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            {['React', 'Tailwind', 'JavaScript', 'UI/UX'].map((tech) => (
                                <span 
                                    key={tech}
                                    className="px-4 py-2 bg-white text-purple-600 font-medium rounded-full shadow-md border border-purple-100 hover:bg-purple-600 hover:text-white transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <button className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform">
                            Meet Our Team
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: '100+', label: 'Projects Completed' },
                        { value: '5+', label: 'Years Experience' },
                        { value: '50+', label: 'Happy Clients' },
                        { value: '10K+', label: 'Lines of Code' }
                    ].map((stat, index) => (
                        <div 
                            key={index} 
                            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                            <div className="mt-2 text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}