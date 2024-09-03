'use client'

import React, { useEffect } from "react"
import { Button } from '@/components/ui/button/Button'
import styles from './header.module.scss'
import { useUserSession } from "@/hooks/useUserSession"
import { signInWithApple, signInWithGoogle, signOutWithGoogle } from "@/libs/firebase/auth"
import { DarkThemeToggle } from "flowbite-react"
import { authService } from "@/services/auth.service"
import { toast } from "sonner"
import { Sun, Moon, GanttChartSquare } from "lucide-react"
import { COLORS } from "@/constants/color.constants"
import Link from "next/link"

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
  const userSessionId = useUserSession(session);

  const handleSignIn = async () => {
    try {
      // const userToken = await signInWithApple()
      const userToken = await signInWithGoogle();
      // @ts-ignore
      if (userToken) {
        await authService.loginWithFirebaseToken(userToken)
      } else {
        toast.error('Виникла помилка при вході')
      }
    } catch (e) {
      console.log(e)
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
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
        <DarkThemeToggle iconDark={Sun} iconLight={Moon} className={'focus:ring-1'} />
          <div className={'flex self-center'}>
            {userSessionId ? (
              <Button pill size={'xs'} color="gray" onClick={handleSignOut}>Вийти</Button>
            ) : (
              <>
                <Button pill size={'xs'} color="gray" onClick={handleSignIn}>Вхід</Button>
                {/*<Button primary size="small" onClick={onCreateAccount} label="Sign up" />*/}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
};
