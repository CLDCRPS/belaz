import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import ProductPopular from "../components/Product/ProductPopular.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';


const Popular = (props) => {

    useEffect(() =>{

        props.GetPopulars(
            1,20
        );
        props.GetFilter()

    }, [])


    return (
        <div className="content">
           {props.popularLoading?<Preloader/>:""}
            <Search/>
            <ProductPopular GetFilter={props.GetFilter} GetPopularFiltered={props.GetPopularFiltered} GetPopulars={props.GetPopulars} filter={props.filter} product={props.populars}/>

        </div>
    );
};

export default Popular;