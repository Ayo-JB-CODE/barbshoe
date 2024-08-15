import ExclusiveOffers from "../Components/ExclusiveOffers/ExclusiveOffers";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar"
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import PopularProducts from "../Components/PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularProducts />
            <ExclusiveOffers />
            <NewCollections />
            <Newsletter />
        </div>
    )
}

export default Home;