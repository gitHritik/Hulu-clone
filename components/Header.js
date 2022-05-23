import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIcon title="SEARCH" Icon={SearchIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src={"/logo2.png"} width={"100"} height={"40"} alt="logo" />
    </header>
  );
};

export default Header;
