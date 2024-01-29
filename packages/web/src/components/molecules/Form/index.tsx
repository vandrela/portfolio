import { Button } from "../../atoms/Button";
import { InputField } from "../InputField";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  position: string;
}

export const Form = () => {
  const methods = useForm<FormData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-[clamp(15px,3vw,30px)]"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div>
          <InputField
            label="Name Surname"
            id="name"
            type="text"
            name="name"
            rules={{ required: "Name is required" }}
          />
          {/* {methods.formState.errors.name && (
            <span className="text-red-500">
              {methods.formState.errors.name.message}
            </span>
          )} */}
        </div>
        <div>
          <InputField
            label="Email"
            id="email"
            type="text"
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            }}
          />
          {/* {methods.formState.errors.email && (
            <span className="text-red-500">
              {methods.formState.errors.email.message}
            </span>
          )} */}
        </div>
        <div>
          <InputField
            label="Position"
            id="position"
            type="text"
            name="position"
            rules={{ required: "Position is required" }}
          />
          {/* {methods.formState.errors.position && (
            <span className="text-red-500">
              {methods.formState.errors.position.message}
            </span>
          )} */}
        </div>

        <Button
          label="Send info"
          classNames="rounded-[10px] py-[clamp(16px,2vw,23px)] text-white text-[clamp(16px,2vw,20px)] mt-[17px] w-full font-normal bg-white20"
        />
      </form>
    </FormProvider>
  );
};
