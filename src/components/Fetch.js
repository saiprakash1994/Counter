// https://dummyjson.com/products
import "./fetch.css";
import React, { useState, useEffect } from "react";
function Fetch() {
    useEffect(() => {
        getData();
    }, []);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [sort, setSort] = useState("");

    const getData = async () => {
        const JSONData = await fetch("https://dummyjson.com/products");
        const JSOData = await JSONData.json();
        setData(JSOData.products);
        console.log(JSOData.products);
    };
    return (
        <div className="App">
            <div className="head">
                <h1>Ecommerce</h1>
            </div>
            <div className="main">
                <div className="side">
                    <div className="side1">
                        <br></br>
                        <p
                            style={{
                                backgroundColor: "black",
                                color: "silver",
                                display: "inline-block",
                                borderRadius: 5,
                                fontSize: 20,
                            }}
                        >
                            --Filter--
                        </p>
                        <input
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            placeholder="Search"
                        ></input>
                        <br></br>
                        <br></br>
                        <select
                            value={min}
                            onChange={(e) => {
                                setMin(e.target.value);
                            }}
                        >
                            <option vlaue="">Min</option>
                            <option vlaue={1}>1</option>
                            <option vlaue={50}>50</option>
                            <option vlaue={100}>100</option>
                            <option vlaue={500}>500</option>
                            <option vlaue={1000}>1000</option>
                            <option vlaue={1500}>1500</option>
                        </select>{" "}
                        <select
                            value={max}
                            onChange={(e) => {
                                setMax(e.target.value);
                            }}
                        >
                            <option vlaue="">Max</option>
                            <option vlaue={1}>1</option>
                            <option vlaue={50}>50</option>
                            <option vlaue={100}>100</option>
                            <option vlaue={500}>500</option>
                            <option vlaue={1000}>1000</option>
                            <option vlaue={1500}>1500</option>
                        </select>
                        <br></br>
                        <br></br>
                        <select
                            value={sort}
                            onChange={(e) => {
                                setSort(e.target.value);
                            }}
                        >
                            <option value="">Realavence</option>
                            <option value="a">A-Z</option>
                            <option value="z">Z-A</option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
                <div className="contant">
                    <div className="box">
                        {data
                            .filter((e) => {
                                if (search == "") {
                                    return e;
                                } else if (
                                    e.brand.toLowerCase().includes(search.toLowerCase())
                                    || e.title.toLowerCase().includes(search.toLowerCase())

                                ) {
                                    return e;
                                }
                            })
                            .filter((e) => {
                                if (min == "" && max == "") {
                                    return e;
                                } else if (e.price > min && e.price < max) {
                                    return e;
                                }
                            })
                            .sort((a, b) => {
                                if (sort === "") {
                                    return a, b;
                                } else if (sort == "a") {
                                    return a.brand - b.brand;
                                } else if (sort == "z") {
                                    return b.brand - a.brand;
                                } else if (sort == "low") {
                                    return a.price - b.price;
                                } else if (sort == "high") {
                                    return b.price - a.price;
                                }
                            })
                            .map((e) => (
                                <div className="box1">
                                    <h1>{e.brand}</h1>
                                    <h5>{e.title}</h5>
                                    <img src={e.thumbnail}></img>
                                    <p>{e.description}</p>
                                    <h4>{e.price} $</h4>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Copyright &copy; Ecommerce</p>
            </div>
        </div>
    );
}

export default Fetch;
