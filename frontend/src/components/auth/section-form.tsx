import Link from "next/link";
import { ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";

type Props = {
  children: ReactNode;
  typeForm: "login" | "register";
};

const SectionForm = ({ children, typeForm }: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col  w-full max-w-sm p-4">
        <h2 className="text-center text-2xl mb-4">
          {typeForm === "login" ? "Войдите" : "Зарегистрируйтесь"}
        </h2>
        {children}
        <div className="flex flex-row gap-2 mb-4">
          <Checkbox checked={true} />
          <div className="text-sm">
            <span>Соглашаюсь с </span>{" "}
            <Link className="hover:text-primary" href="/personalPolicy">
              правилами пользования
            </Link>
            <span> торговой площадкой и возврата.</span>
          </div>
        </div>
        {typeForm === "login" ? (
          <div className="text-sm text-center">
            <span>Если нет аккаунта —</span>{" "}
            <Link
              className="hover:text-primary underline underline-offset-4"
              href="/register"
            >
              регистрация
            </Link>
          </div>
        ) : (
          <div className="text-sm text-center">
            <span>Есть аккаунт —</span>{" "}
            <Link
              className="hover:text-primary underline underline-offset-4"
              href="/login"
            >
              войдите
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionForm;
