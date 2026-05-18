import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import React from "react";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <section className="flex" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            <div className="px-4"></div>    
            {children}{" "}
            <Footer/>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </section>
  );
}
