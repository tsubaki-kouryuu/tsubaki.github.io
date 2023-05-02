import Sidebar from '../components/sidebar/sidebar_wrapper'

export default function Home() {
  return (
  <div class="flex flex-auto flex-col">
    <Sidebar />
    <div class="relative flex-auto">
      <div class="lg:ml-[auto] 2xl:max-w-3xl lg:max-w-[786px] h-screen bg-[url('/images/not-tsubaki.png')] bg-right bg-cover bg-no-repeat"></div>
    </div>
  </div>
  );
}