import { TwitterShareButton } from "react-share"
import { BsTwitter } from 'react-icons/bs'


export default function Tweet({quote}: {quote: string}) {
    return (
        <TwitterShareButton
            title={`"${quote}"\n\t- Aubrey Graham\n\n`}
            url="https://drake-rest.vercel.app/"
        >
            <BsTwitter className="text-[1.4rem] text-blue-400"/>
        </TwitterShareButton>
    )
}