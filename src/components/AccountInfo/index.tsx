import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { copyText } from "@src/lib/tools";
import Button from "@src/components/Button";
import IconCopy from "@src/assets/copy.svg";

interface IProps {
    account: string;
    action: string;
}

export default function AccountInfo({ account, action }: IProps) {
    const navigate = useNavigate();
    const [copied, setCopied] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const doCopy = () => {
        copyText(account);
        setCopied(true);
    };

    const doActivate = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    const doRemove = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/wallet");
        }, 1500);
    };

    return (
        <div className="p-4 pt-0 text-center flex flex-col items-center justify-between mb-4">
            <Jazzicon diameter={100} seed={jsNumberForAddress(account)} />
            <div className="text-lg mt-1 mb-2">Account 1</div>
            <div
                className="gap-2 flex items-center mb-6 cursor-pointer tooltip"
                data-tip={copied ? "Copied" : "Click to copy"}
                onMouseLeave={() => setTimeout(() => setCopied(false), 400)}
                onClick={doCopy}
            >
                <img src={IconCopy} className="w-4 opacity-50" />
                <span className="opacity-50 text-base text-black">
                    {account.slice(0, 4)}...{account.slice(-4)}
                </span>
            </div>
            {action === "activate" && (
                <Button
                    classNames="btn-blue"
                    onClick={doActivate}
                    loading={loading}
                >
                    Activate wallet
                </Button>
            )}
            {action === "remove" && (
                <Button
                    classNames="btn-red"
                    onClick={doRemove}
                    loading={loading}
                >
                    Remove
                </Button>
            )}
        </div>
    );
}
