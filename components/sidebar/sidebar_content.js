import Link from 'next/link'

export default function SidebarContent() {
    return (
    <div class="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
        <div class="relative">

            <div>
                <Link href="/" className="group">
                    <h1 class="transition-colors duration-500 ease-in-out text-4xl/tight font-semibold text-white/85 group-hover:text-white">
                        Tsubaki <span class="transition-colors duration-500 ease-in-out text-rose-300 group-hover:text-rose-400">Kouryuu</span>
                    </h1>
                </Link>
            </div>

            <div class="mt-2 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">

                <a class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-rose-300 gap-x-3" href="https://na.finalfantasyxiv.com/lodestone/character/21103931/">
                    <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <span class="home-world"></span>
                    <span class="self-baseline text-white">Jenova</span>
                </a>
                <a class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-rose-300 gap-x-3" href="mailto:tsubaki@kouryuu.me">
                    <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" class="flex-none h-4 w-4"><path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path></svg>
                    <span class="self-baseline text-white">E-Mail</span>
                </a>

                <span class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium gap-x-3">
                    <span class="text-[.4rem] text-rose-300 mr-3">●</span> a simple Auri programmer
                </span>
                
            </div>

        </div>
    </div>
    );
}