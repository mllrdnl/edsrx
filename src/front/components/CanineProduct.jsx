import React, { useState, useEffect } from 'react';
import Select from "react-dropdown-select";
import '../styles/canineproducts.css';

export const CanineProduct = () => {
    const proteins = [
        {
        value:"Low Fat Kangaroo",
        label:"kangaroo"
        }, 
        {
        value:"rabbit",
        label:"rabbit"
        },
        {
        value:"crocodilia",
        label:"alligator"
        },        
    ]

    const type = [
        {
        value:"dry",
        label:"dry"   
        },
        {
        value:"pate",
        label:"pate"   
        },
        {
        value:"chunky stew",
        label:"chunky stew"   
        }
    ]

    const treats = [
        {
        value:"none",
        label:"no treats"   
        },
        {
        value:"sp treat",
        label:"sweet potato slices"   
        },
        {
        value:"sp crunch",
        label:"sweet potato crunch"   
        },
        {
        value:"kangaroo jerky",
        label:"kangaroo jerky"   
        },
        {
        value:"rabbit jerky",
        label:"rabbit jerky"   
        },
        {
        value:"alligator jerky",
        label:"alligator jerky"   
        }
    ]

    const [value, setValue] = useState("");

    return (
        <div className="canineprod_container">
            <h3 id="prod_title">Products:</h3>
            <div className="product_select">
            <h4>Protein:</h4>
            <Select multi options={proteins} values={[]} label={proteins.label} onChange={ev => setValue(ev.label)} />

            <h4>Food Type:</h4>
            <Select multi options={type} values={[]} label={type.label} onChange={ev => setValue(ev.label)} />

            <h4>Treats:</h4>
            <Select multi options={treats} values={[]} label={treats.label} onChange={ev => setValue(ev.label)} />

            </div>

        </div>

    )
}