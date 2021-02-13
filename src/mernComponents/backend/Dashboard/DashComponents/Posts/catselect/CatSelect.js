import React,{useEffect,useState} from 'react';
import {FormControl,NativeSelect,Paper} from '@material-ui/core';
import {getCategories} from '../../../../../../mernmodules/Taxonomies';
function CatSelect() {
    //const [value,setValue] = useState('');
    const [cat,setCat] = useState([]);
    useEffect(()=>{
        const catData = async ()=>{
            setCat(await getCategories());
        }
        catData();
    },[]);
    return (
        <Paper>
            <FormControl>
            <label>Choose Category</label>
                <NativeSelect>
                    <option value="Uncategorized">Default1</option>
                   {cat && cat.map((cate,i)=><>
                   <option value={cate.opt_name} key={i}>{cate.opt_name}</option>
                   </>)}
                    {console.log(cat)}
                </NativeSelect>
            </FormControl>
        </Paper>
    )
}

export default CatSelect
