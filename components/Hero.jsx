import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"   

import {
    RiBrieFcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownsLine,
} from "react-icons/ri"


//components
import DevImg from "./DevImg"
import Socials from "./Socials"
import Badge from "./Badge"

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-gray-200">
      <div className="container mx-auto  ">
        <div className="flex justify-between gap-x-8 text-center">

        {/* text*/}
        <div>text</div>

        {/*image */}
        <div>web Developer</div>
        <h1>Hello, my name is Sagar Thkaur</h1>
        <p>Brief description with inspinght into systemBrief description with inspinght into system</p>

        </div>

        {/*icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownsLine className="text-3xl text-primary" />


        </div>
      </div>
    </section>
  )
}

export default Hero
