import Image from 'next/image'
import nextJSLogo from "../../public/images/next.svg"

export default function SidebarFooter() {
    return (
    <div class="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
        <p class="flex gap-x-2 text-[0.8125rem]/6 text-gray-500">
            <span class="self-center">Built by a programming Au Ra with love using</span> 
            <a class="self-baseline group relative isolate flex items-center rounded-lg px-0 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 gap-x-2" href="https://nextjs.org/">
            <span class=" absolute inset-0 -z-10 scale-75 rounded-lg opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
            <Image src={nextJSLogo} height={12} alt="Next.JS Logo" class="relative top-1 invert opacity-60 hover:opacity-100 transition-opacity duration-500 ease-in-out" />
            </a>
        </p>
    </div>
    );
}