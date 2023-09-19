"use client";

import { Popover } from "@headlessui/react";
import { useDataContext } from "@/app/context/data";

const Footer = () => {
  const { activeUser, setUser, accounts, setAccounts } = useDataContext();

  return (
    <Popover className="relative mt-auto">
      <Popover.Button className="flex items-start justify-start w-full outline-none group">
        <div className="flex w-full items-center gap-2 px-4 py-2 mt-auto mb-4 mr-2 rounded-full cursor-pointer hover:bg-[#eef3f41a] transition-colors">
          <img
            className="w-10 h-10 rounded-full"
            src={activeUser.image}
            alt="Rounded avatar"
          ></img>
          <div className="flex flex-col gap-0.5 items-start">
            <h1 className="text-sm font-bold">{activeUser.name}</h1>
            <p className="text-sm text-gray-500">@{activeUser.username}</p>
          </div>
          <div className="ml-auto">
            <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>
          </div>
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-50 w-full p-3 overflow-hidden bg-black bottom-full -left-10 shadow-box rounded-xl">
        {accounts.map((account) => (
          <button
            key={account.username}
            onClick={() => {
              const updatedAccounts = accounts.map((acc) => ({
                ...acc,
                isActive: false,
              }));
              const updatedAccount = { ...account, isActive: true };
              setUser(updatedAccount); // Seçilen hesabı ayarla
              updatedAccounts[accounts.indexOf(account)] = updatedAccount;
              setAccounts(updatedAccounts);
            }}
            className={`flex items-center w-full gap-2 px-1 py-2 mt-auto mb-4 mr-2  ${
              !account.isActive
                ? "cursor-pointer hover:bg-[#eef3f41a] transition-colors"
                : "cursor-default pointer-events-none"
            }`}
          >
            <img
              className="w-10 h-10 rounded-full"
              src={account.image}
              alt="Rounded avatar"
            ></img>
            <div className="flex flex-col gap-0.5 items-start">
              <h1 className="text-sm font-bold">{account.name}</h1>
              <p className="text-sm text-gray-500">@{account.username}</p>
            </div>
            <div className="ml-auto">
              {account.isActive && (
                <svg viewBox="0 0 24 24" width={20} height={20} fill="#00c936">
                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
                </svg>
              )}
            </div>
          </button>
        ))}
        <button className="w-full text-sm font-bold py-3 mt-3 px-2 text-white text-start hover:bg-[#eef3f41a] ">
          Var olan bir hesap ekle
        </button>
        <button className="w-full text-sm font-bold py-3 mt-3 px-2 text-white text-start hover:bg-[#eef3f41a] ">
          Hesapları Yönet
        </button>
        <button className="w-full text-sm font-bold py-3 mt-3 px-2 text-white text-start hover:bg-[#eef3f41a] ">
          Var olan bir hesap ekle
        </button>
      </Popover.Panel>
    </Popover>
  );
};

export default Footer;
