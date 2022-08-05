import React from "react";
import { Link } from "react-router-dom";
import Jazzicon from "react-jazzicon";
import config from "@src/config";
import sdk from "@src/sdk";

export function Navbar() {
    const doLockWallet = async () => {
        sdk.wallet.lockWallet();
    };
    const doRecoverWallet = async () => {
        sdk.wallet.recoverWallet();
    };

    return (
        <div className="navbar bg-base-100 border-b border-slate-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-base">
                    {config.walletName}
                </a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <Jazzicon
                                diameter={40}
                                seed={Math.floor(Math.random() * 100)}
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a onClick={doLockWallet}>Lock Wallet</a>
                        </li>
                        <li>
                            <Link
                                to="/recover-wallet"
                                onClick={doRecoverWallet}
                            >
                                Recover Wallet
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
