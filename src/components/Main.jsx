import { Input } from "./Input";

export function Main() {
  return (
    <div className="md:bg-main-gray md:pt-30 md:pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">

      
      
       <div className="font-sans ">
        <h1 className="pt-10">
          <img src="./src/img/logo_facebook.svg" alt="facebook" className=" mx-auto md:mx-0 w-290px md:-mb-4 md:-ml-8" />
        </h1>
        <h2 className="hidden md:flex text-subtitle leading-8 w-500px pr-6 ">
         
          O Facebook ajuda você a se
          conectar e compartilhar com as
           pessoas que fazem parte da sua 
           vida.
          
        </h2>
        </div>
       <div className="md:w-396px md:place-self-end">

       
       <div className="p-4 md:border border-gray-200 md:shadow-xl shadow-zinc-400 rounded-lg bg-white">
             
       <form className="flex flex-col">
          <Input
          type="text"
          placeholder='Email ou telefone'
          />
          <Input
          type="password"
          placeholder='Senha'
          />
          <button
          className="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold 
           text-white text-xl"
          type="submit">Entrar</button>
          </form>
          <div className="flex flex-col divide-y divide-gray-400 divide-opacity-40 text-center mt-2 md:mt-0 ">
          <p className="pb-4 order-2 md:order-1"> 
             <a href="#" className="text-blue-600 hover:underline" >Esqueceu a senha?</a> 
          </p>
          <div className="pb-6 pt-8 order-1 md:order-2">
            
            <p>
              <a href="#"className="py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg font-bold rounded">Criar nova conta</a>
            </p>
          </div>
          </div>
          </div>
          <div className="hidden md:block text-sm mt-5 text-center">
          <p><a href="#" className="font-bold hover:underline">Criar uma Página</a> para uma celebridade, banda ou uma empresa.</p>

          
          </div>
        

       </div>
       </div>
     </div>
  
  )
}