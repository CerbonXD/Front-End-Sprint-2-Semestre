export default function Card({img, title, text}) {
    return (
        <div className="min-h-[33.75rem] max-w-96 bg-white rounded-3xl p-5">
            <div className="flex flex-col justify-center items-center">
                <img className="w-[6.25rem] h-[6.25rem]" src={img} alt={"Image " + title}/>
                <h2 className="text-3xl my-3.5 font-bold">{title}</h2>
            </div>
            <div>
                <p className="text-[1.125rem] text-justify">{text}</p>
            </div>
        </div>
    )
}