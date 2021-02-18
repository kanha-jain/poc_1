import { CARS_API } from "../../../config"

const carUrl = ({ detail }) => {
    return (
        <div>
            <p>{JSON.stringify(detail)}</p>
            <p>{detail.city}</p>
        </div>
    )
}

export default carUrl

export const getStaticPaths = async () => {
    // const res = await fetch(CARS_API);
    // const { data: { content } } = await res.json();
    const paths = [];
    // content.forEach(car => {
    //     const carName = car.carName.split(" ").join("-"),
    //         city = car.city.split(" ").join("-"),
    //         id = car.carId.toString(),
    //         year = car.year.toString()

    //     paths.push({
            // params: {
            //     carUrl: `${carName}-${year}-cars-${city}-${id}`
            // }
    //     });
    // })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${CARS_API}/${context.params.carUrl}`)
    const json = await res.json();

    if (res.status === 404) {
        return {
            notFound: true
        }
    }

    const { data } = json;
    const { detail } = data;

    return {
        props: {
            detail
        },
        revalidate: 1000
    }
}