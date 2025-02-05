import { Button } from '@/components/common/shadcn/button';
import { ShirtIcon } from '@/assets/icons/ShirtIcon';
import { AppTopMenu } from './AppTopMenu';
import { AppNavigationMenu } from './AppNavigationMenu';
import { ThemeToggle } from '@/components/features/theme/ThemeToggle';
import { AppModal } from '@/components/common/AppModal';
import { Suspense, lazy, useRef } from 'react';
import { ModalController } from '@/types/ModalController';
import { TFormController } from '@/types/TFormController';
import { useSigninForm } from '@/hooks/logics/useSigninForm';
import { useSignupForm } from '@/hooks/logics/useSignupForm';
// import { useDataSubmit } from "@/hooks/data/useDataSubmit";
import { ILoginRequest } from '@/interfaces/request/ILoginRequest';

const ForwardedAppForm = lazy(() => import('@/components/common/AppForm'));

export function Header() {
  const signinModalRef = useRef<ModalController | null>(null);
  const signinFormRef = useRef<TFormController | null>(null);
  const signupModalRef = useRef<ModalController | null>(null);
  const signupFormRef = useRef<TFormController | null>(null);

  const { formSchema: signinSchema, fields: signinFields } = useSigninForm();

  const { formSchema: signupSchema, fields: signupFields } = useSignupForm();

  // const loginService = async (params: ILoginRequest) => {
  //   return {} as any
  // }

  // const loginSuccess = () => {}

  // const {
  //   mutate: submitLogin,
  //   isPending: isLoginLoading,
  // } = useDataSubmit<ILoginRequest>(loginService, loginSuccess)

  const handleSignin = async (values: ILoginRequest) => {
    // submitLogin(values);
    signinModalRef.current?.close();
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <a href="#" className="mr-6 hidden lg:flex">
          <ShirtIcon className="h-6 w-6" />
          <span className="sr-only">ShadCN</span>
        </a>
        <AppTopMenu />
        <AppNavigationMenu />
        <div className="ml-auto flex gap-2">
          <AppModal
            triggerElement={
              <Button
                variant="outline"
                onClick={() => {
                  signinModalRef.current?.open();
                }}
              >
                Sign in
              </Button>
            }
            ref={signinModalRef}
            texts={{
              title: 'SIGN IN',
            }}
          >
            <Suspense fallback={<></>}>
              <ForwardedAppForm
                ref={signinFormRef}
                formSchema={signinSchema as any}
                fields={signinFields}
                onsubmit={handleSignin}
              />
            </Suspense>
          </AppModal>
          <AppModal
            triggerElement={<Button>Sign Up</Button>}
            ref={signupModalRef}
            texts={{
              title: 'SIGN UP',
            }}
          >
            <Suspense fallback={<></>}>
              <ForwardedAppForm
                ref={signupFormRef}
                formSchema={signupSchema as any}
                fields={signupFields}
              />
            </Suspense>
          </AppModal>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
