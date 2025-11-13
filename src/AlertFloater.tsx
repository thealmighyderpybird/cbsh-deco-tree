export default function AlertFloater() {
    return (
        <div id="alert-floater">
            <noscript className="alert">
                <div>
                    <span className="icon"></span>
                    <div>
                        <h3>JavaScript is not enabled!</h3>
                        <p>
                            This will prevent almost everything on this site from working.
                            Please enable JavaScript first, or switch to a browser that supports or allows JavaScript.
                        </p>
                    </div>
                </div>
                <span className="close" style={{visibility: "hidden"}}><span></span></span>
            </noscript>
        </div>
    );
}