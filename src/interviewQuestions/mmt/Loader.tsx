/*
 * Interview Question (MakeMyTrip):
 *
 * Build a `Loader` component that accepts three props:
 *   - text: the message to show while loading (e.g. "Loading...")
 *   - delay: how long the loading state should last, in milliseconds
 *   - Component: the component to render once loading is done
 *
 * When Loader mounts, it should show `text`. After `delay` ms have passed,
 * it should hide the text and render `Component` instead.
 *
 * Make sure the timer doesn't leak if the Loader unmounts before the delay
 * is over, and that it restarts if `delay` changes.
 *
 * Example:
 *   <Loader text="Loading..." delay={2000} Component={Dashboard} />
 *   → shows "Loading..." for 2 seconds, then renders <Dashboard />
 */

import { useEffect, useState } from "react";

type LoaderProps = {
  text: string;
  delay: number;
  Component: React.ComponentType;
};

/**
 * Shows a loading text for a fixed time, then renders the given component.
 *
 * @param text - Text shown while loading (e.g. "Loading...").
 * @param delay - How long to show the text, in milliseconds (passed straight to setTimeout).
 * @param Component - Component to render once the delay is over. It receives no props.
 * @returns A <div> containing `text` until `delay` ms have passed, then `<Component />`.
 */
function Loader({ text, delay, Component }: LoaderProps) {
    const [loading , setLoading] = useState<boolean>(true)
  useEffect(()=>{
    const id = setTimeout(()=>{
        setLoading(false);
    } , delay) 

    return ()=>{
        clearTimeout(id)
    }
  } ,[delay])

  return (
    <div>{loading ? text : <Component/>}</div>
  )
}

export default Loader;