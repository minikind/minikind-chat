import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon, MenuIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/tailwind";
import { useParams } from "react-router-dom";

const userNavigation = [
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Channel() {
  const { channelId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </>
  );
}
