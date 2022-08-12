import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@src/assets/logo.svg";
import LogoText from "@src/assets/logo-text.svg";
import { SendEmail } from "@src/components/SendEmail";
import { CreatePassword } from "@src/components/CreatePassword";

export function CreateWallet() {
    const [step, setStep] = useState<number>(1);

    const onVerified = () => {
        setStep(1);
    };

    const onCreated = () => {
        setStep(2);
    };

    return (
        <>
            <div className=" p-6 h-full flex flex-col">
                <div className="flex items-center mb-12">
                    <img className="w-12" src={Logo} />
                    <img className="w-24" src={LogoText} />
                </div>
                <div>
                    {step === 0 && (
                        <>
                            <div className="page-title mb-4">
                                Email Verification
                            </div>
                            <SendEmail onVerified={onVerified} />
                        </>
                    )}
                    {step === 1 && (
                        <>
                            <div className="page-title mb-4">
                                Create password
                            </div>
                            <CreatePassword onCreated={onCreated} />
                        </>
                    )}
                    {/* {step === 2 && (
                        <>
                            <div className="page-title mb-8">
                                Congratulations
                            </div>
                            <div className="page-desc mb-10">
                                <div className="mb-2">
                                    You have craeted your first wallet!
                                </div>
                                <div className="mb-2">
                                    Now you can use this wallet to receive fund.
                                </div>
                                <div className="mb-2">
                                    To unlock full feature, please deploy this
                                    wallet after you received/top up your
                                    wallet.
                                </div>
                            </div>
                            <Link to="/wallet">
                                <button className="btn btn-primary w-full mb-2">
                                    Continue
                                </button>
                            </Link>
                        </>
                    )} */}
                </div>
            </div>
        </>
    );
}
