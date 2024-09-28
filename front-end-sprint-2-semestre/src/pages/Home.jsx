import Header from "../components/Header.jsx/Header";
import {Carousel} from "@material-tailwind/react";
import Card from "../components/Card/Card.jsx";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="max-w-[120rem] mx-auto">
                <section className="flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center my-14 px-5 lg:px-20">
                    <div className="md:max-w-[50%]">
                        <h1 className="text-4xl font-bold mb-2.5 text-center md:text-start">Problema</h1>
                        <p className="text-center md:text-start text-xl mb-7">A Fórmula E, apesar de ser uma emocionante categoria de automobilismo elétrico, enfrenta um grande desafio: a falta de visibilidade. Muitas vezes, o público não consegue se envolver ou se prender à Fórmula E, o que impede o crescimento de sua base de fãs. Isso é um problema significativo porque a Fórmula E possui grande potencial para atrair uma audiência interessada em tecnologia, inovação e sustentabilidade no esporte.</p>
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

                <section className="bg-[url('section_background.png')] bg-no-repeat bg-center bg-cover px-5 lg:px-20 pb-14">
                    <h1 className="text-4xl font-bold text-center md:text-start text-white pt-14 mb-14">Solução</h1>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Card img="cellphone.png" title="Highlights" bg="1" text="Vídeos de Highlights: em um formato estilo TikTok, nossa plataforma exibirá os melhores momentos de cada corrida. Os vídeos serão criados pelos usuários e pela conta oficial da Fórmula E. Nosso objetivo é atrair novos fãs mostrando momentos marcantes das corridas e aumentar o interesse pelo esporte. Além disso, queremos que os fãs existentes compartilhem e assistam a momentos únicos, fortalecendo o engajamento da comunidade."></Card>
                        <Card img="live.png" title="Transmissões ao vivo" bg="1" text='Transmissão ao vivo: através de pesquisas percebemos que a cobertura de canais de TV não é satisfatória e que ainda não existe um aplicativo similar a "F1TV" para a Fórmula E. Portanto, temos como solução a transmissão de todas as corridas em tempo real para os usuários da nossa plataforma de forma gratuita com anúncios. Dessa forma, garantimos uma maior acessibilidade ao público e aumentamos o número de telespectadores das corridas.'></Card>
                        <Card img="joystick.png" title="Game" bg="1" text="Jogo de construção de carros: queremos implementar um jogo para criar carros personalizados, atraindo fãs desse segmento. O objetivo é aumentar o engajamento, permitindo que os usuários postem suas criações. As equipes oficiais da Fórmula E poderão votar periodicamente para escolher o melhor carro, que será usado nas próximas corridas. Também incluiremos um quiz para testar os conhecimentos dos usuários sobre a Fórmula E."></Card>
                    </div>
                </section>

                <section className="px-5 lg:px-20 pb-14">
                    <h1 className="text-4xl font-bold text-center md:text-start pt-14 mb-14">Comparação</h1>
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-20 justify-center items-center text-white">
                        <Card img="x.png" title="Impactos Negativos do Problema" text={
                            <ul>
                                <li><p>• Baixa visibilidade da Fórmula E</p></li>
                                <li><p>• Menor engajamento do público</p></li>
                                <li><p>• Perda de oportunidades de patrocínio</p></li>
                            </ul>
                        }></Card>
                        <p className="text-8xl text-black">X</p>
                        <Card img="correct.png" title="Impactos Positivos da Solução" text={
                            <ul>
                                <li><p>• Aumento da visibilidade e do engajamento</p></li>
                                <li><p>• Maior base de fãs</p></li>
                                <li><p>• Novas oportunidades de patrocínio e parcerias</p></li>
                                <li><p>• Envolvimento ativo dos usuários com a personalização e votação de skins</p></li>
                                <li><p>• Interatividade aumentada através de jogos e quizzes</p></li>
                            </ul>
                        }></Card>
                    </div>
                </section>

                <footer className="bg-[url('section_background.png')] bg-no-repeat bg-center bg-cover px-5 lg:px-20 pb-5 pt-28 text-white">
                    <div className="flex flex-wrap justify-center gap-10 mb-12">
                        <img className="max-w-16" src="facebook.png" alt=""/>
                        <img className="max-w-16" src="instagram.png" alt=""/>
                        <img className="max-w-16" src="twitter.png" alt=""/>
                        <img className="max-w-16" src="gmail.png" alt=""/>
                        <img className="max-w-16" src="youtube.png" alt=""/>
                    </div>
                    <div>
                        <ul className="flex flex-wrap justify-center gap-10 text-3xl">
                            <li><a href="#" className="font-bold">Home</a></li>
                            <li><a href="#" className="font-bold">Noticias</a></li>
                            <li><a href="#" className="font-bold">Sobre</a></li>
                            <li><a href="#" className="font-bold">Nosso Time</a></li>
                            <li><a href="#" className="font-bold">Cotate-nos</a></li>
                        </ul>
                    </div>
                    <p className="text-center mt-20">Copyright ©2024; Designed with FIGMA</p>
                </footer>
            </main>
        </>
    )
}