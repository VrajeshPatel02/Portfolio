import React from 'react';
import { Sparkle } from 'lucide-react';
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { TextAnimate } from "@/components/ui/text-animate"
import { cn } from "@/lib/utils"

type Props = {
    badge: string;
    heading?: string;
    subHeading?: string;
    className?: string;
}

const Heading = (props: Props) => {
  return (
    <>
    <div className={cn(
        "group flex flex-col overflow-hidden gap-3 [--duration:40s]",
        `${props.className}`
      )}>
    <div>
    <Sparkle className='text-highlight size-5 mr-3 inline-block'/>
    <AnimatedShinyText className='text-highlight text-sm uppercase font-sans'>
        {props.badge}
    </AnimatedShinyText>
    </div>
    {props.heading && 
    <TextAnimate className='font-sans-bold text-5xl text-foreground' animation="blurInUp" by="character" once>
    {props.heading}
    </TextAnimate>
    }
    {props.subHeading && <p className='font-sans text-secondary'>{props.subHeading}</p>}
    </div>
    </>
  )
}

export default Heading