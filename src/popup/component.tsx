import React from "react";
import browser from "webextension-polyfill";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "@src/pages/Welcome";
import { CreateWallet } from "@src/pages/CreateWallet";
import { Wallet } from "@src/pages/Wallet";

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
        <div className="artboard phone-1 phone">
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/create-wallet" element={<CreateWallet />} />
                </Routes>
            </Router>
        </div>
    );
}
