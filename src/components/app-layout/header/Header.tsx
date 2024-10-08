'use client'

import React from "react"
import { Button } from '@/components/ui/button/Button'
import styles from './header.module.scss'
import { signOutFirebaseAuth } from "@/libs/firebase/auth"
import { DarkThemeToggle } from "flowbite-react"
import { authService } from "@/services/auth.service"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"
import { Profile } from "@/components/app-layout/header/profile/Profile"

export interface HeaderProps {
  /**
   * session info of current user
   */
  session?: any
  /**
   * on login action when user logged in successfully
   */
  onLogin?: () => void
  /**
   * on logout action when user logged out successfully
   */
  onLogout?: () => void
  /**
   * additional logic whn user create account successfully
   */
  onCreateAccount?: () => void
}

export const Header = ({ onLogin, onLogout, onCreateAccount, session }: HeaderProps) => {
  const handleSignOut = async () => {
    await signOutFirebaseAuth();
    await authService.logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className="relative">
          <Link
            href="/"
            className="flex items-center border-b border-b-border"
          >
            <img src="img/icons/AlphaLogo.svg" alt="Alpha Icon" />
						<span className="absolute -top-3 -right-4 text-xs opacity-40 rotate-[18deg] font-normal dark:text-gray-100">
							beta
						</span>
          </Link>
          <h1 className="hidden">Alpha соцмережа</h1>
        </div>
        <div className={"flex self-center"}>
          <Profile />
          <DarkThemeToggle iconDark={Sun} iconLight={Moon} className={'focus:ring-1'} />
          <div className={'flex self-center'}>
            <Button pill size={'xs'} color="gray" onClick={handleSignOut}>Вийти</Button>
          </div>
        </div>
      </div>
    </header>
  )
};
