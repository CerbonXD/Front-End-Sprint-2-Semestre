export default function Card({img, title, text, bg}) {
    const bgColor = bg === "1" ? "bg-white" : "bg-[url('section_background.png')] bg-no-repeat bg-cover";

    return (
        <div className={"min-h-[33.75rem] max-w-96 rounded-3xl p-5 " + bgColor}>
            <div className="flex flex-col justify-center items-center">
                <img className="w-[6.25rem] h-[6.25rem]" src={img} alt={"Image " + title}/>
                <h2 className="text-3xl my-3.5 font-bold text-center">{title}</h2>
            </div>
            <div>
                <p className="text-[1.125rem] text-justify">{text}</p>
            </div>
        </div>
    )
}