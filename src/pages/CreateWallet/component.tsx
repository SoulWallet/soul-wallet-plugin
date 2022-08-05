import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@src/components/Navbar";
import { SendEmail } from "@src/components/SendEmail";
import { CreatePassword } from "@src/components/CreatePassword";

export function CreateWallet() {
    const [step, setStep] = useState<number>(0);

    const onVerified = () => {
        setStep(1);
    };

    const onCreated = () => {
        setStep(2);
    };

    return (
        <>
            <Navbar />
            <div className="p-4 text-center h-5/6 flex flex-col justify-between">
                <div>
                    {step === 0 && (
                        <>
                            <div className="page-title">Create Wallet</div>

                            <div className="page-desc mb-8">
                                Please verify email first to create wallet.
                            </div>
                            <SendEmail onVerified={onVerified} />
                        </>
                    )}
                    {step === 1 && (
                        <>
                            <div className="page-title">Create Wallet</div>

                            <div className="page-desc mb-8">
                                Please create password
                            </div>
                            <CreatePassword onCreated={onCreated} />
                        </>
                    )}
                    {step === 2 && (
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
                    )}
                </div>
            </div>
        </>
    );
}
