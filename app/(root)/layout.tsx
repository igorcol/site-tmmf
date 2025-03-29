import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  // TODO -> SE NÃO ESTIVER LOGADO, REDIRET

  return (
    <main className="flex min-h-screen w-full flex-row bg-notwhite">
      {/* sidebar */}
      <Sidebar />

      {/* Content container */}
      <div className="flex w-[100%-264px] flex-1 flex-col p-5 xs:p-10">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default layout;
