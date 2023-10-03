import { SignedIn, SignedOut, useSignOut } from "@gadgetinc/react";
import React from "react";
import { Outlet } from "react-router-dom";
import "../components/App.css";
import Icon from "./assets/google.svg";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const signOut = useSignOut();

  return (
    <div className="header">
      <div className="logo">{process.env.GADGET_PUBLIC_APP_SLUG}</div>
      <div className="header-content">
        <SignedIn>
          <>
            This is {process.env.GADGET_PUBLIC_APP_SLUG}&apos;s user sign out:
            <button className="signout-button" onClick={signOut}>
              Sign Out
            </button>
          </>
        </SignedIn>
        <SignedOut>
          <>
            This is {process.env.GADGET_PUBLIC_APP_SLUG}&apos;s user sign in:
            <a className="signin-button" href="/auth/google/start?redirectTo=/signed-in">
              <img src={Icon} width={22} height={22} />
              Sign In with Google
            </a>
          </>
        </SignedOut>
      </div>
    </div>
  );
};

export default Layout;
