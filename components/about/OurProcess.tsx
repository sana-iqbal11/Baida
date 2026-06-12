import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { processSteps } from "@/data/process";

export default function OurProcess() {
    return (
        <section className="bg-white lg:px-6 px-3 py-10 md:py-18">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    tag="Our Process"
                    title="How We Craft"
                    description="Every BAIDA candle is carefully made in small batches."
                />

                <div className="overflow-hidden lg:rounded-[40px] rounded-[20px] bg-cream shadow-sm">
                    <div className="grid lg:grid-cols-2 gid-col-1">
                        {/* Left Image */}
                        <div className="relative min-h-[420px]  overflow-hidden bg-cream lg:min-h-[650px]">
                            <Image
                                src="/images/ourprocesss.webp"
                                alt="BAIDA candle making process"
                                fill
                                className="object-cover scale-105 "
                            />

                            <div className="absolute inset-0 bg-dark/10" />

                            <div className="absolute bottom-8 left-8 right-8 rounded-[28px] bg-cream/85 p-6 backdrop-blur-sm">
                                <p className="text-sm uppercase lg:tracking-[0.35em] text-gold">
                                    The BAIDA Process
                                </p>

                                <h3 className="mt-3 lg:text-3xl text-2xl font-light text-dark">
                                    Crafted With Care
                                </h3>
                            </div>
                        </div>

                        {/* Right Steps */}
                        <div className="flex flex-col justify-center  gap-5 lg:px-5 px-2 py-6 md:p-10 lg:p-12 ">
                            {processSteps.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative overflow-hidden rounded-[10px] border border-beige bg-gold/80 px-6 py-5 shadow-sm"
                                >
                                    <Image
                                        src={item.illustration}
                                        alt=""
                                        width={150}
                                        height={150}
                                        className="pointer-events-none absolute right-0 top-0 opacity-50"
                                    />

                                    <div className="relative z-10 flex gap-5">
                                        <span className="min-w-12 text-4xl font-light text-dark/100">
                                            {item.step}
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-light text-dark">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-dark/80">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}