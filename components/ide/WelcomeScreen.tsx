export default function WelcomeScreen() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-ide-muted select-none">
            <pre className="text-[11px] leading-tight mb-6 hidden sm:block">{`
    _   _ _               _        __          _   _   _       _
   /_\\ | | |__  ___ _ __| |_ ___ / _|_ _ __ _| |_| |_(_)_ _ (_)
  / _ \\| | '_ \\/ -_) '_|  _/ _ \\  _| '_/ _\` |  _|  _| | ' \\| |
 /_/ \\_\\_|_.__/\\___|_|  \\__\\___/_| |_| \\__,_|\\__|\\__|_|_||_|_|
`}</pre>
            <p className="text-[13px] mb-2">
                Welcome to{" "}
                <span className="text-ide-text font-semibold">
                    albertofratini.com
                </span>
            </p>
            <p className="text-[12px]">
                Open a file from the sidebar to explore.
            </p>
        </div>
    );
}
