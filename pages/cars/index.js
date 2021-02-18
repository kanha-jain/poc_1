import { CARS_API } from "../../config"

const cars = ({ car }) => {
    return (
        <div>
            <h2>Cars Page</h2>
            <p>{JSON.stringify(car, undefined, 4)}</p>
        </div>
    )
}

export default cars

export const getStaticProps = async () => {
    const res = await fetch(`${CARS_API}/Maruti-Alto-K10-2017-cars-Gurgaon-1019004335`);
    const car = await res.json();

    return {
        props: {
            car
        }
    }
}