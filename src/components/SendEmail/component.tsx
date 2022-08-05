import React, { useState } from "react";

interface SendEmailProps {
    onVerified: () => void;
}

export function SendEmail({ onVerified }: SendEmailProps) {
    const [gapTime, setGapTime] = useState<any>(0);
    const [sendInterval, setSendInterval] = useState<any>(undefined);

    const doSend = async () => {
        setGapTime(60);
        const interval = setInterval(() => {
            setGapTime((prev: number) => {
                if (prev === 0) {
                    clearInterval(sendInterval);
                } else {
                    return prev - 1;
                }
            });
        }, 1000);
        setSendInterval(interval);
    };

    return (
        <div className="form-control w-full">
            <div className="mb-2">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="input input-bordered w-full"
                    />

                    {gapTime && gapTime > 0 ? (
                        <a className="btn btn-disabled">{gapTime}s</a>
                    ) : (
                        <a className="btn btn-secondary" onClick={doSend}>
                            Send
                        </a>
                    )}
                </div>
            </div>
            <div className="mb-10">
                <label className="label">
                    <span className="label-text">Verification code</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter verification code"
                    className="input input-bordered w-full"
                />
            </div>

            <button
                className="btn btn-primary w-full mb-2"
                onClick={onVerified}
            >
                Confirm
            </button>
        </div>
    );
}
