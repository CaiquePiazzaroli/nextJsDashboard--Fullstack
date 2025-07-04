import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Essa parte será estática */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* Essa parte será dinâmica, ira mudar conforme cliamos nos botoes da SideNav*/}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
