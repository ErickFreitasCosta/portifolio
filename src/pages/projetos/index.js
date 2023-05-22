import './style.css'

// Imagens
import Logo from '../../images/calculadora.png'
import TelaLogin from '../../images/telaLogin.png'
import LoginPm from '../../images/sitePm.png'
import Botao from '../../images/botao.png'
import EmBreve from '../../images/emBreve.png'


function Projetos(){
    return(
        <div>

            
            <div className='title-projetos'></div>
            
            <div className="centralizar-projetos">
                

                <div className="card-container">
                    <div className='card-1'>  
                        <a href="https://calculadora0800.netlify.app/" target='_blank'>
                            <img src={Logo} /></a>
                        <div className='link-card'>
                            
                            <a href="https://calculadora0800.netlify.app/" target='_blank' > Link</a>
                        </div>
                    </div>

                    <div className='card-1'>  
                        <img src={TelaLogin} className='img-login' target='_blank'/>
                        <div className='link-card'>
                            
                            <a href="https://tela-login-roan.vercel.app/" target='_blank'> Link</a>
                        </div>
                    </div>

                    <div className='card-1'>  
                        <img src={LoginPm} className='img-login'/>
                        <div className='link-card'>
                            
                            <a href="https://login-pmpa-tela.vercel.app/" target='_blank'> Link</a>
                        </div>
                    </div>

                    <div className='card-1'>  
                        <a href="https://botoestyles.netlify.app/" target='_blank'>
                            <img src={Botao} className='img-login'/>
                        </a>
                            <div className='link-card'>
                            
                            <a href="https://botoestyles.netlify.app/" target='_blank'> Link</a>
                        </div>
                    </div>

                    <div className='card-2'>  
                        <img src={EmBreve} className='emBreve'/>
                        <div className='link-card'>
                            
                            <a href="#" target='_blank'> Link</a>
                        </div>
                    </div>

                    <div className='card-1'>  
                        <img src={EmBreve} className='emBreve' />
                        <div className='link-card'>
                            
                            <a href="#" target='_blank'> Link</a>
                        </div>
                    </div>  

                 </div>


            </div>
            
                    


        </div>
    )
}
export default Projetos