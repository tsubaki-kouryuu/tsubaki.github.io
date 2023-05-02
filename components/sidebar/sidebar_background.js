export default function SidebarBackground() {
    return (
    <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%+35rem))] lg:min-w-[32rem]">
        <svg class="absolute -bottom-48 left-[-40%] h-[100rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[100rem]" aria-hidden="true">
            
            <defs>
            <radialGradient id="radial-sidebar-desktop" cx="100%">
                <stop offset="0%" stop-color="rgba(231, 98, 125, 0.35)"></stop>
                <stop offset="53.95%" stop-color="rgba(184, 35, 90, 0.15)"></stop>
                <stop offset="68.95%" stop-color="rgba(128, 19, 87, 0.15)"></stop>
                <stop offset="85.95%" stop-color="rgba(61, 22, 53, 0.15)"></stop>
                <stop offset="100%" stop-color="rgba(28, 26, 39, 0)"></stop>
            </radialGradient>
            <radialGradient id="radial-sidebar-mobile" cy="100%">
                <stop offset="0%" stop-color="rgba(231, 98, 125, 0.35)"></stop>
                <stop offset="53.95%" stop-color="rgba(184, 35, 90, 0.15)"></stop>
                <stop offset="68.95%" stop-color="rgba(128, 19, 87, 0.15)"></stop>
                <stop offset="85.95%" stop-color="rgba(61, 22, 53, 0.15)"></stop>
                <stop offset="100%" stop-color="rgba(28, 26, 39, 0)"></stop>
            </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#radial-sidebar-desktop)" class="hidden lg:block"></rect>
            <rect width="100%" height="100%" fill="url(#radial-sidebar-mobile)" class="lg:hidden"></rect>

        </svg>

        <div class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"></div>
        
    </div>
    );
}