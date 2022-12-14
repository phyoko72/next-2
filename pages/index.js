import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='min-h-screen'>
            <nav className=' bg-blue-300 p-10'>
                <h1>developedbyed</h1>
                <ul>
                    <li> <BsFillMoonStarsFill/> </li>
                    <li><a href="#">Resume</a></li>
                </ul>
            </nav>
        </section>
      </main>

    </div>
  )
}
