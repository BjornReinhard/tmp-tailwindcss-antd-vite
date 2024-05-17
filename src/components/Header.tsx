import Logo from "@/components/Logo.tsx";
import { Button, Input } from "antd";
import classNames from "classnames";

function Header({className, ...props}: { className?: string }) {
    const classes = classNames('flex justify-between', className)
    return <div className={classes} {...props}>
        <Logo/>
        <div className="flex flex-col gap-3">
            <div className="flex gap-1">
                <Input name="someField" size="small"/>
                <Button size="small">Search</Button>
            </div>
            <div className="flex justify-end gap-2 text-sm">
                <a href="#" className="no-underline text-black">One</a>
                <a href="#" className="no-underline text-black">Two</a>
                <a href="#" className="no-underline text-black">Three</a>
                <a href="#" className="no-underline text-black">Four</a>
                <a href="#" className="no-underline text-black">Five</a>
            </div>
        </div>
    </div>
}

export default Header
