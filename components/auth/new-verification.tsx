"use client";

import { newVerification } from "@/actions/new-verification";
import CardWrapper from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import FormError from "../gen/form-error";
import FormSuccess from "../gen/form-success";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const NewVerification = () => {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const { toast } = useToast();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token as string)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  }, [success, error, token, toast]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Account verifiction"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <div className="flex w-full items-center justify-center">
        {!success && !error && (
          <BarLoader
            color="#2a4edf"
            cssOverride={{
              width: "100%",
            }}
            height={10}
            loading={true}
            speedMultiplier={2}
            width={10}
          />
        )}

        {!error && <FormSuccess message={success} />}
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerification;
