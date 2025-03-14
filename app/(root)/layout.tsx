import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  const loggedIn = {firstName: 'Dercio', lastName: 'Anselmo'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar  user={loggedIn}/>
        {children}
    </main>
  );
}
