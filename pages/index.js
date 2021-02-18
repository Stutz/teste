import Link from 'next/link'

function Home(){
    return (<div>
        <h1>Página Home 2</h1>
        <Link href="/sobre">
            <a>Ir para a página Sobre</a>
        </Link>      
    </div>)
}

export default Home