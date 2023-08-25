import { Outlet, useLocation } from "react-router-dom";
import Appbar from "../components/UI/appbar.tsx";
import { PropsWithChildren, useLayoutEffect } from "react";

const Wrapper = (props: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex flex-col items-center w-full m-0 p-0 ">
      {props.children}
    </div>
  );
};

const Index = () => {
  return (
    <Wrapper>
      <Appbar />
      <div className="w-[80%] pt-24 pb-12">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Index;
