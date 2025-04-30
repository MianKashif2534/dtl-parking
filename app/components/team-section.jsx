/* eslint-disable @next/next/no-img-element */
export default function TeamSection() {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-[radial-gradient(23.41%_23.41%_at_52.42%_48.07%,_#5305B8_0%,_#0B0428_100%)] border-[4px] border-[rgba(58,25,100,0.4)]">
            {/* Radial gradient blur in the background */}
            {/* <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0"
          style={{
            background:
              "radial-gradient(41.25% 76.79% at 37.43% 47.02%, rgba(255, 255, 255, 0.2) 0%, rgba(40, 4, 98, 0.2) 100%)",
            filter: "blur(100px)",
          }}
        ></div> */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <h2 className="text-royalpurple text-5xl font-bold text-center mb-16">Team Members</h2>

                <div className="flex justify-center">
                    <div className="grid grid-cols-5 grid-rows-3 relative">
                        {/* <div className="grid grid-cols-5 gap-4 max-w-5xl relative"> */}
                        {/* HR DEPT - Left side */}
                        <div className="col-start-1 row-start-2 flex justify-center">
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0B0428" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img
                                            src="/team-1.png"
                                            alt="HR Dept"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-xs">HR Dept</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 - HR and Accounting Manager */}
                        <div className="col-start-2 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                            {/* HR */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img src="/team-1.png" alt="HR" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-white text-xs">HR</p>
                                </div>
                            </div>

                            {/* Accounting Manager */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0B0428" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img
                                            src="/team-1.png"
                                            alt="Accounting Manager"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-xs">Accounting Manager</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 - CEO/Outbound Team, Team Members, CEO/Outbound Team */}
                        <div className="col-start-3 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                            {/* CEO/Outbound Team (Top) */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0B0428" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img src="/team-1.png" alt="CEO" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-white text-xs">CEO/Outbound Team1</p>
                                </div>
                            </div>

                            {/* Team Members (Center) */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col justify-center items-center">
                                    <h3 className="text-royalpurple text-2xl font-bold text-center">Team</h3>
                                    <h3 className="text-royalpurple text-2xl font-bold text-center">Members</h3>
                                </div>
                            </div>

                            {/* CEO/Outbound Team (Bottom) */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img src="/team-1.png" alt="CEO" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-white text-xs">CEO/Outbound Team</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 4 - Outbound Team and Inbound Team */}
                        <div className="col-start-4 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                            {/* Outbound Team */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img
                                            src="/team-1.png"
                                            alt="Outbound Team"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-xs">Outbound Team</p>
                                </div>
                            </div>

                            {/* Inbound Team */}
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img
                                            src="/team-1.png"
                                            alt="Inbound Team"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-xs">Inbound Team</p>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance / Safety - Right side */}
                        <div className="col-start-5 row-start-2 flex justify-center">
                            <div className="relative">
                                <svg
                                    viewBox="0 0 180 160"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <defs>
                                        {/* Background Gradient */}
                                        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#461094" />
                                            <stop offset="30%" stopColor="#16052E" />
                                        </linearGradient>

                                        {/* Border Stroke Gradient */}
                                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5305B8" />
                                            <stop offset="100%" stopColor="#250252" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
                                        fill="url(#fillGradient)"
                                        stroke="url(#strokeGradient)"
                                        strokeWidth="4"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center">
                                    <div className="w-40 h-40 overflow-hidden rounded-full mt-2 mb-1">
                                        <img
                                            src="/team-1.png"
                                            alt="Maintenance / Safety"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-xs">Maintenance / Safety</p>
                                </div>
                            </div>
                        </div>

                        {/* </div> */}
                        {/* <div className="col-start-1 row-start-2 w-10 h-10 bg-slate-200">HR DEPT</div>

                        <div className="col-start-2 row-span-3 flex flex-col items-center justify-center gap-2">
                            <div className="w-10 h-10 bg-slate-200">HR</div>
                            <div className="w-10 h-10 bg-slate-200">Accounting Manager</div>
                        </div>

                        <div className="col-start-3 row-span-3 flex flex-col items-center justify-center gap-2">
                            <div className="w-10 h-10 bg-slate-200">CEO/Outbound Team</div>
                            <div className="w-10 h-10 bg-slate-200">Team Members</div>
                            <div className="w-10 h-10 bg-slate-200">CEO/Outbound Team</div>
                        </div>

                        <div className="col-start-4 row-span-3 flex flex-col items-center justify-center gap-2">
                            <div className="w-10 h-10 bg-slate-200">Outbound Team</div>
                            <div className="w-10 h-10 bg-slate-200">Inbound Team</div>
                        </div>

                        <div className="col-start-5 row-start-2 w-10 h-10 bg-slate-200">Maintenance / Safety</div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}
