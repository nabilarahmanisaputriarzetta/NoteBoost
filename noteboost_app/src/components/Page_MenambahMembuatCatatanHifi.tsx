import React, { useState } from "react";
import Settings from "./assets/Settings";
import Logo from "./assets/Logo";
import Add from "./assets/Add";
import SideBar from "./assets/SideBar";
import Line from "./assets/Line";
import Line1 from "./assets/Line1";
import Arrow_drop_down from "./assets/Arrow_drop_down";
import Logo1 from "./assets/Logo1";

export default function Page_MenambahMembuatCatatanHifi({
  className = "",
}: Page_MenambahMembuatCatatanHifiProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`flex w-full items-start leading-[normal] ${className}`}>
      <div className="flex h-full w-full flex-col overflow-clip bg-sky-500">
        <div className="bg-tt-rectangle-9tcontainer-trectangle-18bg-line font-inter flex flex-grow items-end justify-center bg-cover bg-center leading-[1.2]">
          <div className="flex flex-grow flex-col self-stretch leading-[1.2]">
            <div className="relative flex flex-wrap items-center justify-between gap-[5.6px] border border-solid border-x-black/20 border-y-black/20 bg-neutral-100 py-5 pl-11 pr-[34px] font-semibold text-sky-900 backdrop-blur-[2] min-[1430px]:flex-nowrap">
              <div className="flex items-center justify-center gap-2.5">
                <img
                  className="h-11 w-11 object-cover object-center cursor-pointer"
                  src="/assets/avatars-3d_avatar_.png"
                  loading="lazy"
                  onClick={() => alert("Change profile picture clicked")}
                />
                <div className="w-28">Cacing Pintar</div>
              </div>
              <div className="text-2xl font-bold leading-[1.2]">Home</div>
              <div className="flex items-center justify-end gap-[5.6px] pl-[22px]">
                <div
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => alert("Settings clicked")}
                >
                  <Settings className="h-full w-full" />
                </div>
                <div>Settings</div>
              </div>
              <Logo className="absolute left-[calc(50%_+_-31.26px_+_-39.74px)] top-[calc(50%_+_-31.26px_+_3.8px)] h-16 w-14" />
            </div>

            <div className="flex h-[745px] items-end">
              {/* Sidebar */}
              {sidebarOpen && (
                <div className="relative flex h-[833px] items-start justify-center gap-3.5 border border-solid border-x-black/20 border-y-black/20 bg-[#faebd799] pb-[2.5px] pl-[7px] pt-[88px] transition-all duration-300">
                  <div className="flex flex-col items-center justify-end pt-[9px]">
                    <div className="flex items-center justify-center">
                      <div
                        className="flex items-center gap-3 rounded border border-solid border-x-black/20 border-y-black/20 bg-white py-[13px] pl-[9px] pr-40 cursor-pointer"
                        onClick={() => alert("New Notes clicked")}
                      >
                        <Add className="h-[13px] w-3.5" />
                        <div>New Notes</div>
                      </div>
                      <div className="flex flex-col items-center border border-solid border-x-[#80808019] border-y-[#80808019] bg-white">
                        <button
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-center rounded border border-solid border-x-black/20 border-y-black/20 px-[19px] py-[15px]"
                        >
                          <SideBar className="h-[15px] w-4 rounded-[5px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute inset-x-1 bottom-0 h-px" />
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex w-[9px] flex-grow items-center">
                      <Line1 className="h-[741px] w-px" />
                    </div>
                    <div className="flex h-0 flex-col items-center">
                      <div className="mt-[-636.5px] h-[51px] w-[9px] bg-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Toggle Button when sidebar is closed */}
              {!sidebarOpen && (
                <div className="flex h-full flex-col justify-start pt-20 pl-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="rounded bg-white px-4 py-2 border border-black/20 hover:bg-gray-100 transition"
                  >
                    Open Sidebar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex w-0 items-center">
            <div className="ml-[-952px] flex w-[839px] flex-col items-end gap-[22px] border border-solid border-x-[#80808019] border-y-[#80808019] bg-white px-6 pb-36 pt-2.5">
              <div className="flex w-[785px] flex-wrap items-center justify-between gap-x-20 gap-y-6 text-white min-[1430px]:flex-nowrap">
                <div className="flex w-52 items-center border-solid border-x-[#80808019] border-y-[#80808019] text-xs leading-[1.2]">
                  <p>Page 1</p>
                </div>
                <div
                  className="flex w-24 items-center justify-center border-solid border-x-[#80808019] border-y-[#80808019] text-center text-sm font-extrabold leading-[1.2] text-black cursor-pointer"
                  onClick={() => alert("Enhance clicked")}
                >
                  <p>Enhance</p>
                </div>
              </div>
              <div className="flex w-[785px] items-center justify-end pr-40">
                <div className="relative flex overflow-clip border border-solid border-x-[#80808019] border-y-[#80808019] bg-sky-900 pl-[755px] pt-[509px] leading-[1.2]">
                  <div className="absolute bottom-0 left-0 z-[1] flex h-80 w-[345px] pl-[345px] pt-80">
                    <div className="bg-t-bg-union-mata-pelajaran absolute bottom-[-155px] left-[-122px] z-0 flex h-[467px] w-[467px] flex-col items-end justify-center bg-cover bg-center pb-96 pl-80 pt-16">
                      <div className="text-center font-semibold text-white">
                        MATA PELAJARAN
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-48 right-52 top-[calc(50%_+_-26px_+_-28.5px)] z-[2] flex h-[52px] flex-col items-center">
                    <select
                      className="w-[352px] rounded-md bg-white py-3.5 pl-4 pr-4 text-black text-center"
                      defaultValue="7"
                    >
                      {[7, 8, 9, 10, 11, 12].map((kelas) => (
                        <option key={kelas} value={kelas}>
                          {kelas}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="absolute left-48 right-52 top-[calc(50%_+_-26px_+_54px)] z-[3] flex h-[52px] flex-col items-center">
                    <input
                      type="text"
                      placeholder="Tulis Nama Pelajaran"
                      className="w-[352px] rounded-md bg-white py-3.5 px-4 text-black"
                    />
                  </div>
                  <div className="absolute left-48 right-52 top-[calc(50%_+_-26px_+_-66px)] z-[4] flex h-[19px] flex-col items-center">
                    <div className="text-center font-semibold text-white">
                      PILIH KELAS
                    </div>
                  </div>
                  <div className="bg-t-close absolute right-2.5 top-2 h-6 w-6 bg-cover bg-center pl-6 pt-6" />
                  <div className="absolute bottom-24 left-48 right-52 z-[6] flex h-[52px] flex-col items-center">
                    <button
                      onClick={() => alert("OK button clicked")}
                      className="flex items-center justify-center rounded-md bg-[seagreen] px-32 py-3.5"
                    >
                      <div className="flex-grow text-center text-xl leading-[1.2] text-white">
                        OK
                      </div>
                    </button>
                  </div>
                  <div className="absolute left-[calc(50%_+_-32.5px_+_-74px)] top-20 flex h-16 w-56 flex-col items-center">
                    <div className="flex items-center justify-center gap-[3px]">
                      <Logo1 className="h-16 w-16" />
                      <div className="text-2xl font-semibold leading-[1.2] text-white">
                        NOTEBOOST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

interface Page_MenambahMembuatCatatanHifiProps {
  className?: string;
}