import { SignUpForm } from "@/components/forms/signup-form";

export default function Page() {
  return (
    <div className="w-full h-full flex items-start py-20 justify-center">
      <div className="max-w-xl w-full mx-auto flex flex-col gap-y-8 px-4 ">
        <h1 className="text-2xl font-bold text-[#181818]">
          Sign Up for an Account
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
