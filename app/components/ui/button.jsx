/* eslint-disable @next/next/no-img-element */
export default function CustomBadge({ text = "welcome to dtl", overlayIcon = "/services/icon.svg", className = "w-12 h-12" }) {
    return (
        <div className="relative w-fit mx-auto">
            {/* Border image container */}
            <div className="absolute inset-0 -inset-x-1.5 inset-y-2 md:inset-y-1.5 flex items-center justify-start pointer-events-none">
                <img src="/services/border.svg" alt="" className="h-[110%]" />
            </div>

            {/* Button content */}
            <div className="relative flex items-center z-10">
                {/* Main red banner section */}
                <div className="relative bg-royalblue text-white px-8 py-2 rounded-full pr-12">
                    <span
                        className={`tracking-wide font-futura font-bold ${text.length > 15 ? 'text-sm md:text-xl' : 'text-lg md:text-xl'
                            }`}
                    >
                        {text}
                    </span>

                </div>

                {/* White circular section with custom icon */}
                <div className="relative w-16 h-16 -left-10">
                    {/* Background Image */}
                    <img src="/services/iconbg.svg" alt="" className="w-full h-full" />

                    {/* Overlay Icon */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center">
                        <img
                            src={overlayIcon}
                            alt="Overlay Icon"
                            className={`${className} rounded-full`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
