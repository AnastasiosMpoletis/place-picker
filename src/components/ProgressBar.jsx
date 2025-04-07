import { useState, useEffect } from "react";

/**
 * We use it for performance reasons. 
 * If interval was running in {@link DeleteConfirmation}, the entire DeleteConfirmation component would have re-rendered in every interval.
 * If we move the functionality here, only ProgressBar component will re-render.
 * 
 * @param {*} param0 
 * @returns a progress bar that displays the remaining time until the Modal closes and deletes a place
 */
export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(previousTime => previousTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    );
}