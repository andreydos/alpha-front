'use client'

import React from "react"
import { Button } from '@/components/ui/button/Button'
import styles from './header.module.scss'
import { useUserSession } from "@/hooks/useUserSession"
import { signInWithApple, signInWithGoogle, signOutFirebaseAuth } from "@/libs/firebase/auth"
import { DarkThemeToggle } from "flowbite-react"
import { authService } from "@/services/auth.service"
import { toast } from "sonner"
import { Sun, Moon } from 'lucide-react';
import { useRouter } from "next/navigation"
import { APP_PAGES } from "@/config/pages-url.config"

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
  const { push } = useRouter()

  const handleSignIn = async () => {
    try {
      const userToken = await signInWithGoogle();

      if (userToken) {
        push(APP_PAGES.APP)
      } else {
        toast.error('Виникла помилка при вході')
      }
    } catch (e) {
      console.log(e)
    }
  };

  const handleSignOut = async () => {
    await signOutFirebaseAuth();
    await authService.logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <img src="img/icons/AlphaLogo.svg" alt="Alpha Icon" />
          <h1 className="hidden">Alpha соцмережа</h1>
        </div>
        <div className={'flex self-center'}>
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
