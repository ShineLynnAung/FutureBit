import logo from '../assets/logo.jpg'
export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between px-4 lg:h-full lg:w-64 lg:flex-col lg:justify-start lg:rounded-l-[28px] lg:p-5">
      <a href="/" className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25">
          <img src={logo} alt="FutureBit Logo" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-lg font-black tracking-wide text-cyan-300">FutureBit</p>
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="mt-1 text-xs text-slate-400">From Pixels to Algorithms</p>
      </div>
      </a>
    </header>
  );
}