import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App =()=>{
    
    return(
        <>
        <Header />
            <main>
                <div class="content">
                    <h1>Welcome to My Website</h1>
                    <p>This is the main content area. Add your content here.</p>
                </div>
            </main>
        <Footer />
        </>
    )
}
export default App