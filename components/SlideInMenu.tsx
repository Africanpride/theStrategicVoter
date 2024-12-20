'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import MainMenu from './ui/Menu';
import { menuItems } from '@/config/site';
import { bebas } from '@/config/fonts';
import { useRouter } from 'next/navigation';
import { ThemeSwitch } from './ui/theme-switch';

export default function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    onClose();
    router.push(href);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <div className={`${bebas.className}`} onClick={onOpen}>
        <MainMenu />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='full'
        classNames={{
          base: 'bg-zinc-900',
          closeButton: 'hidden',
        }}>
        <ModalContent className={`${bebas.className} dark:bg-black text-current `}>
          <ModalBody className='relative flex h-screen w-full flex-col items-center justify-center p-0'>

            <Button
              isIconOnly
              variant='light'
              onPress={onClose}
              className='absolute left-3 top-4 text-zinc-400 hover:text-white'>
              <ThemeSwitch />
            </Button>
            <Button
              isIconOnly
              variant='light'
              onPress={onClose}
              className='absolute right-4 top-4 text-zinc-400 hover:text-white'>
              <X className='h-6 w-6' />
              <span className='sr-only'>Close</span>
            </Button>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 rotate-180 text-3xl text-red-500 [writing-mode:vertical-lr]'>
              The Strategic Voter
            </div>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
              <div className='h-20 w-px bg-zinc-700' />
              <div className='text-lg text-white [writing-mode:vertical-lr]'>
                THE KINGDOM PATTERNS SERIES - Volume 1
              </div>
            </div>

            <motion.nav
              className='flex flex-col items-start justify-center gap-4'
              variants={containerVariants}
              initial='hidden'
              animate='visible'>
              {menuItems.map((item) => (
                <motion.div
                  key={item.number}
                  className='group relative flex items-start justify-center'
                  variants={itemVariants}>
                  <span className='absolute -left-8 text-sm text-zinc-600'>
                    {item.number}
                  </span>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className='group relative text-3xl font-light text-white sm:text-4xl transition-all duration-300'>
                    {item.label}
                    <span className='absolute -bottom-2 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full' />
                  </button>
                </motion.div>
              ))}
            </motion.nav>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
