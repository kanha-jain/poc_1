import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content={keywords}/>
                <meta name="description" content={description}/>
                <title>{title}</title>
            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title: "POC",
    keywords: "proof, of, concept, poc",
    description: "proof of concept (poc) for some functionality"
}

export default Meta
