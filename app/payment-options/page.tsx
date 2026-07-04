"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";

export default function PaymentOptionsPage() {
    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Flexible & Secure"
                title="Payment Options"
                subtitle="Choose the best way to pay for your bespoke furniture."
            />

            {/* Content Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Our Standard Payment Structure
                        </h2>
                        <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed mt-4 max-w-2xl mx-auto">
                            To commence work on your custom furniture, we follow a simple two-step payment process. This ensures a committed partnership from start to finish.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center mb-24 max-w-3xl mx-auto">
                        <div className="bg-[#FCFAF8] p-8 border border-gray-100 rounded-sm">
                            <h3 className="text-4xl font-serif text-[#592915] mb-2">50%</h3>
                            <p className="text-sm uppercase tracking-widest font-sans font-semibold text-[#592915]/80">Advance Payment</p>
                            <p className="text-xs text-[#2A1C14]/70 mt-3">To confirm your order and begin material sourcing.</p>
                        </div>
                        <div className="bg-[#FCFAF8] p-8 border border-gray-100 rounded-sm">
                            <h3 className="text-4xl font-serif text-[#592915] mb-2">50%</h3>
                            <p className="text-sm uppercase tracking-widest font-sans font-semibold text-[#592915]/80">Upon Delivery</p>
                            <p className="text-xs text-[#2A1C14]/70 mt-3">Remaining balance to be paid upon final delivery or installation.</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Flexible & Secure Payments
                        </h2>
                        <div className="w-16 h-[1px] bg-[#592915]/30 my-6 mx-auto" />
                        <p className="text-[#2A1C14]/70 font-sans text-base md:text-lg leading-relaxed">
                            We offer a variety of secure and convenient payment options to suit your needs. For custom orders, we typically require an advance to commence work, with the final balance due upon delivery. Our team will provide a detailed invoice and guide you through the payment process. For any specific queries regarding payment terms or methods, please don't hesitate to contact us directly.
                        </p>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}