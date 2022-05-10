import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
  useTransition,
} from "@remix-run/react";
import nProgressStyles from "nprogress/nprogress.css";
import { AnimatePresence, motion } from "framer-motion";
import NProgress from "nprogress";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles/tailwind.css";
import { Navbar } from "./components/sections/Navbar";

export const links: LinksFunction = () => {
  // if you already have one only add this stylesheet to your list of links
  return [
    { rel: "stylesheet", href: nProgressStyles },
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const outlet = useOutlet();
  const transition = useTransition();
  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === "idle") NProgress.done();
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start();
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/slow-page">Slow Page</NavLink>
            <NavLink to="/blogs">Error</NavLink>
          </nav> */}
          <Navbar />
        </header>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={useLocation().key}
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "-40%", opacity: 0 }}
          >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{outlet}</div>
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
