import { bebas } from '@/config/fonts';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  XIcon,
} from 'react-share';
import { shareSocial } from '@/config/site';
import Link from 'next/link';
import SocialShare from '../SocialShare';

type Props = {};

const CTA = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className={` bg-neutral-200 dark:bg-gray-950 `}>
      <div className=' flex flex-col md:flex-row  justify-center md:flex md:items-center md:justify-between 
      min-h-[500px]  w-full mx-auto py-12 px-4 sm:px-6 md:py-16 md:px-8 z-20 space-y-4 '>
        <h2 className={`  sm:text-4xl max-w-3xl`}>
          <div
            className={`${bebas.className} font-display text-4xl tracking-tighter text-accent-background sm:text-5xl`}>
            Be Empowered to Decide!
          </div>
          <div className='mt-4 text-lg tracking-tight '>
            Share the power of strategic voting! Encourage others to make
            informed decisions that makes impact. Spread the word, inspire
            action, and empower voters everywhere today.
          </div>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:pt-0 '>
          <Button
            onPress={onOpen}
            // variant="bordered"
            type='button'
            color="success"
            variant="flat"
            className='px-6 py-6 w-full transition ease-in duration-200 text-center font-semibold '>
            Share With Friends
          </Button>
          <Button
            as={Link}
            href="/the-book"
            type='button'
            variant="solid"
            color='default'
            className='px-6 py-6 font-semibold text-gray-700  '>
            Grab Your Copy
          </Button>


        </div>
      </div>

      <>
        <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1 text-success-400'>
                  Share with Others
                </ModalHeader>
                <ModalBody>
                  <SocialShare />
                </ModalBody>
                <ModalFooter>
                  <Button size='sm' color='default' variant='solid' onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </section>
  );
};

export default CTA;
