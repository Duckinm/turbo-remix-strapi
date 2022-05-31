import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

import type { StrapiFooter } from "~/types/global";
import { classNames } from "~/utils/utils";

import { CustomImage } from "./CustomImage";

interface Props {
  data: StrapiFooter;
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer className="bg-gray-100 pt-12">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {data.logo && (
            <>
              {/*  <NextImage width="120" height="50" media={data.logo} /> */}
              <CustomImage data={data.logo.data.attributes} />
            </>
          )}
        </div>
        <nav className="mx-auto mb-10 flex flex-row flex-wrap items-start px-4 sm:px-6 lg:justify-end lg:gap-20 lg:px-8">
          {data.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 w-6/12 lg:mt-0 lg:w-auto"
            >
              <p className="font-semibold uppercase tracking-wide">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="-mx-1 py-1 px-1 text-gray-700 hover:text-gray-900"
                  >
                    {/*  <CustomLink link={link}>{link.text}</CustomLink> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-gray-200 py-6 text-center text-sm text-gray-700">
        <div className="container">
          {new Date().getFullYear()} {data.smallText}
        </div>
      </div>
    </footer>
  );
};
