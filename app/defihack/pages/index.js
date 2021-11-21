import Tabs from "../components/tabs"
import Home from "./home"

export default function App() {
    return (
        <div className="container mx-auto min-h-screen">
            <Tabs>
                <div label="Home">
                    <Home />
                </div>
                <div label="Teste" />
            </Tabs>
        </div>
    )
}