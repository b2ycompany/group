/* eslint-disable import/no-anonymous-default-export */
import { HeroVideoDialog } from "./hero-video-dialog"

function HeroVideoDialogDemo() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/w1vJmX2pGP4?si=8-ERpKDc4ibt5V9I"
                thumbnailSrc="https://b2ycompany.github.io/group/carbono.png"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/w1vJmX2pGP4?si=8-ERpKDc4ibt5V9I"
                thumbnailSrc="https://b2ycompany.github.io/group/carbono.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    )
}

function HeroVideoDialogDemoTopInBottomOut() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/w1vJmX2pGP4?si=8-ERpKDc4ibt5V9I"
                thumbnailSrc="https://b2ycompany.github.io/group/carbono.png"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/w1vJmX2pGP4?si=8-ERpKDc4ibt5V9I"
                thumbnailSrc="https://b2ycompany.github.io/group/carbono.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    )
}

export default {
    HeroVideoDialogDemo,
    HeroVideoDialogDemoTopInBottomOut,
}
