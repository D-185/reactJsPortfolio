import "./productPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardWrap from "../components/card/CardWrap";


export default function ProductPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setData(response.data.products);
                console.log(response.data.products);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <div className="App">
            <h1>Product Display.</h1>
            <div class="projectCardsWrap">
                {data?.map((item) => (
                        <CardWrap
                            key={item.id}
                            thumbnail={item.images[0]}
                            description={item.description}
                        />
                ))}
            </div>


        </div>
    );
}
