import SidebarBackground from "./sidebar_background";
import SidebarFooter from "./sidebar_footer";
import SidebarContent from "./sidebar_content";

export default function Sidebar() {
    return (
    <div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <SidebarBackground />
      <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%+35rem))] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[2rem]">
        <div class="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-[28rem] lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">       
          <SidebarContent />
          <SidebarFooter />
        </div>
      </div>
    </div>
    );
  }