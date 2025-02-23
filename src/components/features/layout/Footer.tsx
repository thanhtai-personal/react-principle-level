import { DiscordIcon } from '@/assets/icons/Discord';
import { LogoIcon } from '@/assets/icons/LogoIcon';
import { TelegramIcon } from '@/assets/icons/Telegram';
import { TwitterIcon } from '@/assets/icons/Twitter';
import footerBg from '@/assets/images/footer-bg.svg';

export const Footer = ({ fixed = false }: any) => {
  return (
    <div
      className={`${fixed ? 'absolute' : 'relative'} justify-center items-center bottom-0 z-40 flex w-full flex-col bg-[#0E100F] px-4 lg:px-16 py-6`}
    >
      <div className="hidden lg:flex absolute bottom-0 left-0">
        <img src={footerBg} />
      </div>
      <div className="w-full lg:max-w-[1280px] px-2 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-1">
            <div className="flex w-full items-center">
              <a href="#" className="mr-6 flex items-center justify-center">
                <LogoIcon className="mr-2 flex h-9 w-9 items-center justify-center" />
                <div className="flex h-6 items-center justify-center">
                  <span className="font-inter whitespace-nowrap text-center !text-3xl">
                    Nixus AI
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-10 flex w-full flex-col">
              <div className="text">Building a project on Monad?</div>
              <button className="btn-primary mr-4 mt-2 flex w-fit items-center justify-center px-4 lg:px-8 py-2">
                Get in touch
              </button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 flex w-full lg:flex-1 lg:justify-end lg:items-start">
            <div className="flex flex-1 lg:flex-[0] flex-col">
              <div className="text-description-secondary">Features</div>
              <div className="mt-6 flex flex-col">
                <div className="text">About</div>
              </div>
            </div>

            <div className="flex flex-1 lg:flex-[0] flex-col lg:ml-28">
              <div className="text-description-secondary">Community</div>
              <div className="mt-6 flex flex-col">
                <div className="text flex items-center">
                  <TwitterIcon />
                  <div className="ml-2">Twitter</div>
                </div>
                <div className="text mt-4 flex items-center">
                  <TelegramIcon />
                  <div className="ml-2">Telegram</div>
                </div>
                <div className="text mt-4 flex items-center">
                  <DiscordIcon />
                  <div className="ml-2">Discord</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex w-full items-center justify-center text-center">
          <div className="footer-reserved-text">
            © 2025 &nbsp;<strong>Nixus AI</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
