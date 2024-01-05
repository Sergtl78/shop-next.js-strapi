import { LoginForm } from "@/components/auth/login-form";
import SectionForm from "@/components/auth/section-form";
import Image from "next/image";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <section className="h-screen relative container grid md:grid-cols-2">
      <div className="hidden md:flex relative ">
        <Image
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/image-1.svg`}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <SectionForm typeForm="login">
        <LoginForm />
      </SectionForm>
    </section>
  );
};

export default LoginPage;
