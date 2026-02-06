"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { FC } from "react";
import BackToTop from "@/components/elements/BackToTop";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Header2 from "@/components/layout/header/Header2";
import ScrollProgress from "@/components/elements/ScrollProgress";
import PerformanceMonitor from "@/components/elements/PerformanceMonitor";

interface BootstrapComponentsProps { }

const BootstrapComponents = dynamic<BootstrapComponentsProps>(() => import("@/util/useBootstrap"), {
  ssr: false,
  loading: () => null,
}) as FC<BootstrapComponentsProps>;

interface LayoutProps {
  headerStyle?: number;
  children?: React.ReactNode;
  margin?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showScrollProgress?: boolean;
  showBackToTop?: boolean;
  className?: string;
}

export default function Layout({
  headerStyle,
  children,
  margin = "",
  showHeader = true,
  showFooter = true,
  showScrollProgress = true,
  showBackToTop = true,
  className = ""
}: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div id="top" />
      {showScrollProgress && <ScrollProgress />}
      <BootstrapComponents />
      {showHeader && (
        <>
          {!headerStyle && <Header />}
          {headerStyle === 2 && <Header2 />}
        </>
      )}
      <main className={`${margin} ${className}`}>
        <div className="container">{children}</div>
      </main>
      {showFooter && <Footer />}
      {showBackToTop && <BackToTop />}
      <PerformanceMonitor />
    </>
  );
}
