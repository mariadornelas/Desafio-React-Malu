import React from 'react';
import './home.css';
import image from '../../home.png';
import image2 from '../../contato.png';
import image3 from '../../nave.png';
import CardService1 from '../../components/Card/Card1';
import CardService2 from '../../components/Card/Card2';
import CardService3 from '../../components/Card/Card3';


const Home = () => {

    return (
        <>
            <div>
                <div className='begin'>
                    <div>
                        <img className="image" src={image} alt="imagem ilustrativa"></img>
                    </div>

                    <div className='sobre'>
                        <h1 className='about'>Sobre a Empresa</h1>

                        <p className='about-description'>Fundada em 2014, somos uma empresa júnior formada por alunos da UFJF, composta por estudantes do curso de Engenharia Aeroespacial. Por isso, a Astro constitui uma organização sem fins lucrativos regida pela lei 13.267/2016. Além disso, possuímos como objetivo o crescimento profissional de nossos membros, tendo em vista capacitações voltadas à inserção no mercado de trabalho.</p>
                    </div>
                </div>


                <div className='middle'>
                    <h1 className='title-service'>Nossos Serviços</h1>
                    <div className='services'>
                        <CardService1></CardService1>
                        <CardService2></CardService2>
                        <CardService3></CardService3>
                    </div>
                </div>


                <div className='end'>
                    <div  className='email'>
                        <img src={image2} alt="imagem ilustrativa"></img>
                    </div>

                    <div>
                        <h1>Entre em Contato</h1>
                        
                        <div className='form2'>
                            <label>Nome:</label>
                            <form>
                                <input type="name" required></input>
                            </form>

                            <label>Email:</label>
                            <form>
                                <input type="email" required></input>
                            </form>

                            <label>Telefone:</label>
                            <form>
                                <input type="tel" required></input>
                            </form>
                        </div>

                        <div className='button2'>
                            <button type='submit'>Solicitar Contato</button>
                        </div>
                    </div>

                    <div className='nave'>
                        <img src={image3} alt="imagem ilustrativa"></img>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Home;