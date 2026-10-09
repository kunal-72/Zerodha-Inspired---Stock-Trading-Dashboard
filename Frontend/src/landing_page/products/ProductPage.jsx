
import Hero from './Hero.jsx'
import Universe from './Universe.jsx'
import LeftSection from "./LeftSection.jsx"
import RightSection from "./RightSection.jsx"
export default function ProductPage() {
    return (
        <div>
            <Hero />
            <LeftSection
                imageURL={'/media/images/kite.png'}
                productName={'Kite'}
                productDescription={'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'}
                tryDemo={''}
                learnMore={''}
                appStore={''}
                googlePlay={''} />
            <RightSection
                imageURL={'/media/images/console.png'}
                productName={'Console'}
                productDescription={'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'}
                learnMore={''} />
            <LeftSection
                imageURL={'/media/images/coin.png'}
                productName={'Coin'}
                productDescription={'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'}
                tryDemo={''}
                learnMore={''}
                appStore={''}
                googlePlay={''} />
            <RightSection
                imageURL={'/media/images/kiteconnect.png'}
                productName={'Kite Connect API'}
                productDescription={'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'}
                learnMore={''} />
            <LeftSection
                imageURL={'/media/images/varsity.png'}
                productName={'Varsity mobile'}
                productDescription={'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'}
                tryDemo={''}
                learnMore={''}
                appStore={''}
                googlePlay={''} />
            <p className='text-center fs-5 my-5'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
            <Universe />
        </div>
    )
}
