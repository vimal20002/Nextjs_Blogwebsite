import  Head  from 'next/head'
import Form from './components/Form'
const page = () => {
  return (
    <section>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className='main'>
        <h2 className="main_heading">
            Hey There What's is on your mind share with us !
        </h2>
        <br />
        <Form/>
        </div>
    </section>
  )
}

export default page