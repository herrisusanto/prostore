import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Card, CardHeader, CardTitle } from "@/components/ui";
import { APP_NAME } from "@/lib/constants";
import { CardContent, CardDescription } from "@/components/ui/card";
import { SignUpForm } from "@/components/shared/auth";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Sign Up",
};
const SignUpPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  if (session) {
    redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="flex-center">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              priority={true}
              width={100}
              height={100}
            />
          </Link>
          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription>
            Enter your information below to sign up
          </CardDescription>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignUpPage;
