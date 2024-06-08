import React, { useEffect, useState } from 'react'
import {
	useParams,
	Link,
} from 'react-router-dom'

import './ProductPage.css';


type ProductType = {
	id: number
	title: string
    image: string,
    description:string,
    price: string,
}

const SingleUser = () => {
	const params = useParams()

	const [user, setUser] =
		React.useState<ProductType>()

	React.useEffect(() => {
		const singleUserApiUrl = `https://fakestoreapi.com/products/${params.id}`
		//fetch users from json placeholder
		fetch(singleUserApiUrl)
			.then((response) =>
				response.json(),
			)
			.then((json) => setUser(json))
	}, [params])

	return (
		<>
        <br></br>
        <h1>Product Detail Page</h1>
			{user && (
			   
               <main className="container">
 
               <div className="left-column">
                 <img className="active"src={user.image}/> 
               </div>
               <div className="right-column">
               
                 <div className="product-description">
                   <span>{user.title}</span>
                   <p>{user.description}</p>
                 </div>
              
              
                 <div className="product-price">
                   <span>${user.price}</span>
                 </div>
               </div>
             </main>
			)}
		</>
	)
}

export default SingleUser