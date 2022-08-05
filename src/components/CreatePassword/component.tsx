import React, { useState } from "react";

interface CreatePasswordProps {
    onCreated: () => void;
}

interface ErrorProps {
    newPassword: string;
    confirmPassword: string;
}

const errorDefaultValues = {
    newPassword: "",
    confirmPassword: "",
};

export function CreatePassword({ onCreated }: CreatePasswordProps) {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<ErrorProps>(errorDefaultValues);

    const checkParams = () => {
        let flag = true;

        if (!newPassword) {
            setErrors((prev) => ({
                ...prev,
                newPassword: "Please enter new password",
            }));
            flag = false;
        }
        if (!confirmPassword) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: "Please confirm the password",
            }));
            flag = false;
        }
        if (newPassword !== confirmPassword) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: "Password not match",
            }));
            flag = false;
        }
        return flag;
    };

    const doCreate = async () => {
        // clear previous errors
        setErrors(errorDefaultValues);
        if (checkParams()) {
            onCreated();
        }
    };

    return (
        <div className="form-control w-full">
            <div className="mb-2">
                <label className="label">
                    <span className="label-text">New password</span>
                </label>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`input input-bordered w-full ${
                        errors.confirmPassword && "input-error"
                    }`}
                />
                {errors.newPassword && (
                    <div className="text-red-600 text-left text-xs mt-1">
                        {errors.newPassword}
                    </div>
                )}
            </div>
            <div className="mb-10">
                <label className="label">
                    <span className="label-text">Confirm password</span>
                </label>
                <input
                    type="password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`input input-bordered w-full ${
                        errors.confirmPassword && "input-error"
                    }`}
                />
                {errors.confirmPassword && (
                    <div className="text-red-600 text-left text-xs mt-1">
                        {errors.confirmPassword}
                    </div>
                )}
            </div>

            <button className="btn btn-primary w-full mb-2" onClick={doCreate}>
                Create
            </button>
        </div>
    );
}
