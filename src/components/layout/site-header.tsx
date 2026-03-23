"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  FileText,
  Wand2,
  LogIn,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export default function SiteHeader() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [pathname]);

  const hideHeader =
    pathname.includes("/print") || pathname.includes("/export");

  if (hideHeader) return null;

  const isHome = pathname === "/";
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isDashboard = pathname.startsWith("/dashboard");
  const isToolPage =
    pathname.startsWith("/ai-summary") ||
    pathname.startsWith("/resume-builder") ||
    pathname.startsWith("/resume");

  const navLinks = getNavLinks({
    pathname,
    isHome,
    isAuthPage,
    isDashboard,
    isToolPage,
    isAuthenticated,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={isAuthenticated ? "/dashboard" : "/"}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">AI Resume Builder</p>
            <p className="text-xs text-muted-foreground">
              Build ATS-friendly resumes with AI
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={active ? "secondary" : "ghost"}
                    size="sm"
                    className={cn("rounded-xl")}
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function getNavLinks({
  pathname,
  isHome,
  isAuthPage,
  isDashboard,
  isToolPage,
  isAuthenticated,
}: {
  pathname: string;
  isHome: boolean;
  isAuthPage: boolean;
  isDashboard: boolean;
  isToolPage: boolean;
  isAuthenticated: boolean;
}): NavLink[] {
  if (!isAuthenticated) {
    if (isHome) {
      return [
        {
          href: "/ai-summary",
          label: "AI Summary",
          icon: <Wand2 className="h-4 w-4" />,
        },
        {
          href: "/login",
          label: "Login",
          icon: <LogIn className="h-4 w-4" />,
        },
        {
          href: "/signup",
          label: "Get Started",
          icon: <UserPlus className="h-4 w-4" />,
        },
      ];
    }

    if (isAuthPage) {
      return [
        {
          href: "/",
          label: "Home",
          icon: <Sparkles className="h-4 w-4" />,
        },
        {
          href: pathname === "/login" ? "/signup" : "/login",
          label: pathname === "/login" ? "signup" : "Login",
          icon:
            pathname === "/login" ? (
              <UserPlus className="h-4 w-4" />
            ) : (
              <LogIn className="h-4 w-4" />
            ),
        },
      ];
    }

    if (isToolPage) {
      return [
        {
          href: "/",
          label: "Home",
          icon: <Sparkles className="h-4 w-4" />,
        },
        {
          href: "/login",
          label: "Login",
          icon: <LogIn className="h-4 w-4" />,
        },
      ];
    }

    return [
      {
        href: "/",
        label: "Home",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        href: "/login",
        label: "Login",
        icon: <LogIn className="h-4 w-4" />,
      },
    ];
  }

  if (isDashboard) {
    return [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-4 w-4" />,
      },
      {
        href: "/dashboard/resumes",
        label: "My Resumes",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        href: "/ai-summary",
        label: "AI Summary",
        icon: <Wand2 className="h-4 w-4" />,
      },
    ];
  }

  if (isToolPage) {
    return [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-4 w-4" />,
      },
      {
        href: "/dashboard/resumes",
        label: "My Resumes",
        icon: <FileText className="h-4 w-4" />,
      },
    ];
  }

  return [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      href: "/ai-summary",
      label: "AI Summary",
      icon: <Wand2 className="h-4 w-4" />,
    },
  ];
}