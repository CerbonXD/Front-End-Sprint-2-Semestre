import Header from "../components/Header.jsx/Header";
import { Carousel } from "@material-tailwind/react";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="max-w-[120rem] mx-auto">
                <section className="flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center my-14 px-5 lg:px-20">
                    <div className="md:max-w-[50%]">
                        <h1 className="text-4xl font-bold mb-2.5 text-center md:text-start">Problema</h1>
                        <p className="text-center md:text-start mb-7" >A Fórmula E, apesar de ser uma emocionante categoria de automobilismo elétrico, enfrenta um grande desafio: a falta de visibilidade. Muitas vezes, o público não consegue se envolver ou se prender à Fórmula E, o que impede o crescimento de sua base de fãs. Isso é um problema significativo porque a Fórmula E possui grande potencial para atrair uma audiência interessada em tecnologia, inovação e sustentabilidade no esporte.</p>
                    </div>
                    <div>
                        <Carousel className="max-h-[500px] max-w-[687px] rounded-3xl">
                            <img
                                src="formulae_arquibancada.png"
                                alt="Imagem arquibancada 1"
                            />
                            <img
                                src="formulae_arquibancada1.jpg"
                                alt="Imagem arquibancada 2"
                            />
                            <img
                                src="formulae_arquibancada2.jpg"
                                alt="Imagem arquibancada 3"
                            />
                        </Carousel>
                    </div>
                </section>
            </main>
        </>
    )
}