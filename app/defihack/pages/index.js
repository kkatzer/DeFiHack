import Tabs from "../components/tabs"
import Home from "./home"

export default function App() {
    return (
        <div className="container mx-auto min-h-screen">
            <Tabs>
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