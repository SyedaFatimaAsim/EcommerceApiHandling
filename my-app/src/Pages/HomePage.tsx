import Button from "@mui/material/Button"
import axios from "axios"
import React, { useState } from "react"
import {Link} from "react-router-dom"
import './HomePage.css';


const HomePage = (props: any) => {
    const [productList, setProductList] = useState<any>([])
    const [dataLoader, setDataLoader] = useState(false)
    const getApiData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data, "Success Response")
                setProductList([...res.data]);
                setDataLoader(false)
            }).catch((err) => {
                console.log(err, "Error");
            })
    }

	return (
        <>
        <Button onClick={getApiData} sx={{ margin: 1, textTransform: 'capitalize' }} variant="contained">Get Data</Button>
        <div className="users">
            <div className="users__list">
                {productList.map((rows: any, rowIndex: any) => (
                        //single user card
                        <section className="section-card" key={rows.id}>
                            <Link to={`/product/${rows.id}`}>
                            <div className="card">
       <div className="img-container">
           <img src = {rows.image} alt=""/>
       </div>
       <div className="infos">
           <h3 className="name">
               {rows.title}
           </h3>
           <h2 className="price">
               ${rows.price}
           </h2>
       </div>
      </div>
    </Link>
    </section>
    ))}
    </div>
    </div></>
	)
}

export default HomePage