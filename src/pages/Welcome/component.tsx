import React from "react";
import { Navbar } from "@src/components/Navbar";
import { Link } from "react-router-dom";
import sdk from "@src/sdk";
import config from "@src/config";

export function Welcome() {
    const doCreateWallet = async () => {
        sdk.wallet.createWallet();
    };
    return (
        <>
            <Navbar />
            <div className="p-4 text-center h-5/6 flex flex-col justify-between">
                <div>
                    <div className="page-title">Welcome</div>
                    <div className="page-desc">
                        {config.walletName} is the next generation wallet which
                        supports account abstraction, social recovery, etc..
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-gray-400 text-sm">
                        New to soul wallet?
                    </div>
                    <Link to="/create-wallet">
                        <button
                            className="btn btn-primary w-full mb-2"
                            onClick={doCreateWallet}
                        >
                            Create a Wallet
                        </button>
                    </Link>
                    <button className="btn btn-secondary w-full">
                        Recover a Wallet
                    </button>
                </div>
            </div>
        </>
    );
}
