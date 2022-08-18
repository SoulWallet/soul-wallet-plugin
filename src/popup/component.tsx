import React from "react";
import browser from "webextension-polyfill";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "@src/pages/Welcome";
import { CreateWallet } from "@src/pages/CreateWallet";
import { Wallet } from "@src/pages/Wallet";
import GuardianDetail from "@src/pages/Guardian/detail";
import GuardianAdd from "@src/pages/Guardian/add";

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        if (!browser) {
            return;
        }
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className="artboard phone-1 phone rounded-2xl bg-white text-base">
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Welcome />} /> */}
                    <Route path="/" element={<Wallet />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/create-wallet" element={<CreateWallet />} />
                    <Route path="/guardian/add" element={<GuardianAdd />} />
                    <Route
                        path="/guardian/:address"
                        element={<GuardianDetail />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
