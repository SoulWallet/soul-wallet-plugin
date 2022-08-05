import React from "react";
import { Navbar } from "@src/components/Navbar";
import { Link } from "react-router-dom";
import sdk from "@src/sdk";

const assetsList = [
    {
        assets: "ETH",
        activity: "SEND",
        security: "",
    },
    {
        assets: "ETH",
        activity: "SEND",
        security: "",
    },
    {
        assets: "ETH",
        activity: "SEND",
        security: "",
    },
    {
        assets: "ETH",
        activity: "SEND",
        security: "",
    },
];

export function Wallet() {
    const doCreateWallet = async () => {
        sdk.wallet.createWallet();
    };
    return (
        <>
            <Navbar />
            <div className="p-4 text-center flex flex-col justify-between mb-4">
                <div>
                    <div className="page-title mb-2">Account 1</div>
                    <div className="page-desc mb-6">0x4337...0623</div>
                    <div className="flex items-center justify-center gap-3">
                        <a className="btn btn-primary flex-1">Deposit</a>
                        <a className="btn btn-secondary flex-1">Send</a>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Assets</th>
                        <th>Activity</th>
                        <th>Security</th>
                    </tr>
                </thead>
                <tbody>
                    {assetsList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.assets}</td>
                            <td>{item.activity}</td>
                            <td>{item.security}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
