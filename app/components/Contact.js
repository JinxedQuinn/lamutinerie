import Link from 'next/link';

export default function Contact() {
    return (
        <div className="h-screen bg-gray-200">
            <div className="lg:flex lg:justify-center border p-16">
                <div className="lg:max-w-2xl">
                    <h1 className="text-3xl lg:text-4xl text-red-500 font-bold mb-4 justify-start">Nous contacter</h1>
                    <div className="grid lg:grid-cols-2 gap-4 text-black">
                        <div className="mb-4 lg:mb-0">
                            <h2 className="text-lg font-semibold">Téléphone:</h2>
                            <p>01 42 72 70 59</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Email:</h2>
                            <p>contact@lamutinerie.eu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};