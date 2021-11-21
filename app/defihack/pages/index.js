import Tabs from "../components/tabs"
import Home from "./home"
import { useRouter } from "next/router"

export default function App() {
    const router = useRouter()
    return (
        <div className="container mx-auto min-h-screen">
            <Tabs active={ router.query.active !== undefined ? router.query.active : "Home"}>
                <div icon="home" label="Home">
                    <Home />
                </div>
                <div icon="search" label="Search" />
                <div icon="fav" label="Favorites" />
                <div icon="profile" label="Profile" />
            </Tabs>
        </div>
    )
}