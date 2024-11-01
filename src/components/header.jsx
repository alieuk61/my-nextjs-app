import Image from "next/image"

export default function BoardHeader () {

    return(
        <div className="w-full h-24 bg-white">
            <h2>{/*board name*/}</h2>
            {/* add new task button */}
            <Image
                src='..src/public/assets/icon-vertical-elipses.svg'
                alt="vertical elipses"
            />
        </div>
    )
}